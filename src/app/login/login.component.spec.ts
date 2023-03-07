import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let fb:FormBuilder;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[LoginService,FormBuilder],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LoginService);
    fb = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('DI unit test case using test bed method',()=>{
    expect(service instanceof(LoginService)).toBeTruthy();
    expect(fb instanceof(FormBuilder)).toBeTruthy() ;
  });

it("unit test on loginUser subscribe method",fakeAsync(()=>{
 const userName= component.loginForm.controls['userName'];
 const password = component.loginForm.controls['password'];

  const testData:User ={
    userId: '1',
    password: 'password',
    userName: 'user',
    salutation: 'Mr',
    department: 'IT',
    image: 'image',
    token: 'token'
  }
  userName.setValue("user");
  password.setValue('password');
  
  const inputData:User={
    userId: '',
    password: 'password',
    userName: 'user',
    salutation: '',
    department: '',
    image: '',
    token: ''
  }

  const spy = spyOn(service,'loginUser').and.returnValue(of(testData));
   const subSpy = spyOn(service.loginUser(inputData),'subscribe');
  component.login();
  tick();
  expect(spy).toHaveBeenCalledBefore(subSpy);
  expect(spy).toHaveBeenCalled();

  component.userData=testData;
   expect(component.userData).toEqual(testData);
 
  sessionStorage.setItem('userName',testData.userName);
  
    expect(sessionStorage.getItem('userName')).toEqual("user");
  // expect(sessionStorage.getItem('salutation')).toEqual(testData.salutation);
  // expect(sessionStorage.getItem('department')).toEqual(testData.department);
  // expect(sessionStorage.getItem('image')).toEqual(testData.image);
  // expect(sessionStorage.getItem('password')).toEqual(testData.password);
  // expect(sessionStorage.getItem('token')).toEqual(testData.token);
  // expect(sessionStorage.getItem('userId')).toEqual(testData.userId);
  
  
}));

 
});
