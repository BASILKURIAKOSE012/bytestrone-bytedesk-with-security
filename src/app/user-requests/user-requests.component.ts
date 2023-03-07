import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestmodel } from '../model/requestmodel';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {
openRequestData!:Requestmodel[];
resolveRequestData!:Requestmodel[];
closeRequestData!:Requestmodel[];
adminDepartment!:string;
countRequestUser!:number;
countResolveUser!:number;
countCloseUser!:number;
currentPageRequestUser!:number;
currentPageResolveUser!:number;
currentPageCloseUser!:number;
showOpenRequest=false;
showResolveRequest=false;
showCloseRequest=false;
  constructor(private ds:DataService ,private router:Router) { }

  ngOnInit(): void {
  this.adminDepartment=(sessionStorage.getItem("department") || '');
  this.getOpenRequestsData(0);
 }
 //pagination for open request users
onTableOpenRequestDataChange(event:number){
  this.getOpenRequestsData(event-1);
  this.currentPageRequestUser=event;
}
  // http call for open request users
getOpenRequestsData(page:number){
  this.showResolveRequest=false
  this.showCloseRequest=false;
  this.showOpenRequest=true;
  this.ds.getUserOpenrequests(page,this.adminDepartment).subscribe((data:Requestmodel)=>{
    this.openRequestData=data.userRequests;
    this.countRequestUser=data.totalItems;
    })
 }
// http call for request resolved users

getResolveRequestData(page:number){
this.showOpenRequest=false;
this.showCloseRequest=false;
this.showResolveRequest=true;
this.ds.getUserResolveRequests(page,this.adminDepartment).subscribe((data:Requestmodel)=>{
this.resolveRequestData=data.userRequests;


this.countResolveUser=data.totalItems;
})
}
//pagination for resolved users
onTableResolveUserDataChange(event:number){
  this.getResolveRequestData(event-1);
  this.currentPageResolveUser=event;
}

// http call for closed request users
getCloseRequestData(page:number){

  this.showOpenRequest=false;
  this.showResolveRequest=false;
  this.showCloseRequest=true;
  this.ds.getUserCloseRequests(page,this.adminDepartment).subscribe((data:Requestmodel)=>{
this.closeRequestData=data.userRequests;
this.countCloseUser=data.totalItems;
  })
}

// pagination for closed users
onTableCloseUserDataChange(event:number){
  this.getCloseRequestData(event-1);
  this.currentPageCloseUser=event;
}

// to send data to user request resolve component through data service
routeResolve(item:Requestmodel){
this.ds.requestedData(item);
this.router.navigate(['home/user-request-resolve'])
 }

 // to send data to user request closed component through data service
 routeClosed(item:Requestmodel){
this.ds.closedData(item);
this.router.navigate(['home/user-request-closed'])
 }

 // to send data to user request resolved component through data service
 routeResolved(item:Requestmodel){
this.ds.resolvedData(item);
this.router.navigate(['home/user-request-resolved'])
 } 

}
