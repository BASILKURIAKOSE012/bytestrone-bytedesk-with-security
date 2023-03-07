import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRequestResolveComponent } from './user-request-resolve/user-request-resolve.component';
import { NgToastModule } from 'ng-angular-popup';
import { UserRequestClosedComponent } from './user-request-closed/user-request-closed.component';
import { UserRequestResolvedComponent } from './user-request-resolved/user-request-resolved.component';
import { AuthIntercepterService } from './auth-intercepter.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    UserRequestsComponent,
    UserRequestResolveComponent,
    UserRequestClosedComponent,
    UserRequestResolvedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgToastModule
    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthIntercepterService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
