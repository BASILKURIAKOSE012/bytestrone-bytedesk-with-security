import {   NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserRequestClosedComponent } from './user-request-closed/user-request-closed.component';
import { UserRequestResolveComponent } from './user-request-resolve/user-request-resolve.component';
import { UserRequestResolvedComponent } from './user-request-resolved/user-request-resolved.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';

const routes: Routes = [
  {
  path:'home',
  component:HomeComponent,canActivate:[AuthenticationGuard],
  children:[{
    path:'user-requests',
    component:UserRequestsComponent
  },
{
  path:'user-request-resolve',
  component:UserRequestResolveComponent
},
{
  path:'user-request-closed',
  component:UserRequestClosedComponent
},
{
path:'user-request-resolved',
component:UserRequestResolvedComponent
}]
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
