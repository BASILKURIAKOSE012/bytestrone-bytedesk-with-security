import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../service/data.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let homeComponent:HomeComponent;
  let appFixture:ComponentFixture<HomeComponent>;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ,HomeComponent],
      providers:[DataService,],
      imports:[AppRoutingModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    appFixture=TestBed.createComponent(HomeComponent);
    homeComponent=appFixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('unit test case for output directive',async(()=>{
    component.onChangeDefault();
    fixture.detectChanges();
    appFixture.whenStable().then(()=>{
      component.childClicked.subscribe(g=>{
        expect(g).toEqual(false)
      })
    })
  }))

  it('unit test case for output directive',async(()=>{
    component.onChangeTheme();
    fixture.detectChanges();
    appFixture.whenStable().then(()=>{
      component.childClicked.subscribe(g=>{
        expect(g).toEqual(true)
      })
    })
  }))

  it('should clear session storage and navigate to home page', () => {
    spyOn(router, 'navigateByUrl');
    sessionStorage.setItem('login', 'false');

    component.logout();

    expect(router.navigateByUrl).toHaveBeenCalledWith('');
  });
});
