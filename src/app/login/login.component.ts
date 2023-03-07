import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  user: User = new User();
  userData!: User;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toast: NgToastService) { }

  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
// to login the user
  login() {
    this.user.userName = this.loginForm.value.userName || "";
    this.user.password = this.loginForm.value.password || "";
    if (this.loginForm.valid) {
      
      this.loginService.loginUser(this.user).subscribe(data => {
  
        this.userData = data;
         this.success();
       sessionStorage.setItem('token',this.userData.token)
        sessionStorage.setItem('userName', this.userData.userName)
        sessionStorage.setItem('salutation', this.userData.salutation)
        sessionStorage.setItem('userId', this.userData.userId)
        sessionStorage.setItem('department', this.userData.department)
        sessionStorage.setItem('image', this.userData.image)
        sessionStorage.setItem('login', "true")
        this.router.navigateByUrl("home")
      }, () => this.error())
    }
  }
  // login success notification 
  success() {
    this.toast.success({ detail: 'Login Successfull', summary: 'Welcome', position: 'tr', duration: 1000 })
  }
  // login failure notification  
  error() {
    this.toast.error({ detail: 'Invalid Credentials', summary: 'Please enter valid details', position: 'tr', duration: 5000 })
  }
}
