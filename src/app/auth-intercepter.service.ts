import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterService implements HttpInterceptor {

  constructor(private login:LoginService,private router:Router) { }

  intercept(
    req:HttpRequest<unknown>,
    next:HttpHandler
    ):Observable<HttpEvent<unknown>>{
      if(req.url=="http://localhost:8080/api/v1/auth/authenticate"){
        
      return next.handle(req);
    }
    
    const modifiedReq = req.clone({
      headers:req.headers.append('Authorization',"Bearer "+this.login.getToken())
    });
    return next.handle(modifiedReq).pipe(
      catchError((error)=>{       

if(error.status===401 || error.status===403 ){
  sessionStorage.clear()
    sessionStorage.setItem("login","false")
    this.router.navigateByUrl("")
}
   return throwError(error) ;    
      })
    )
}
}