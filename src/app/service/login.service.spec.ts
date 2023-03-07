
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

describe('LoginService', () => {

let loginService: LoginService;
let http: HttpClient;
let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginService],
    });
    loginService = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController.verify();
  })
  it('service created', () => {
    expect(loginService).toBeDefined();
  });

  it('login api', () => {
    const testData:User = { 
        userName:'admin',
        password:'admin',
        salutation:"",
        department:"",
        userId:"",
        image:"",
        token:""
    }
    const inputData:User= {
      userName:'admin',
      password:'admin',
      salutation:"",
      department:"",
      userId:"",
      image:"",
      token:""

    };
    loginService.loginUser(inputData).subscribe((data: User)=>expect(data).toEqual(testData));

    const req =httpController.expectOne('http://localhost:8080/api/v1/auth/authenticate');
    expect(req.request.method).toEqual('POST');
    req.flush(testData);

    expect(loginService).toBeDefined();
  });
   it('get token',()=>{
    expect(loginService.getToken()).toBeDefined();
   })
});

