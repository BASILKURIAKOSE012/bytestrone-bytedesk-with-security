import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from '../model/info';
import { Requestmodel } from '../model/requestmodel';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-request-resolve',
  templateUrl: './user-request-resolve.component.html',
  styleUrls: ['./user-request-resolve.component.css']
})
export class UserRequestResolveComponent implements OnInit {
  requestedIdData!: Requestmodel;
  resolvedData!: Requestmodel;
  closedData!: Requestmodel;
  reassignedData: Info = new Info();
  recievedData!: Info;
  recievedReassignedData!: Info[];
  info!: string;
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.requestedIdData = this.ds.openData;
    // to get the reassigned data

    this.ds.getReassignedData(this.requestedIdData.requestId).subscribe((res) => {
      this.recievedReassignedData = res;
    

    })


  }

  // to resolve the open request data


  resolveRequest() {
    this.requestedIdData.info = this.info;
    if (this.requestedIdData.info != null) {
      this.ds.resolveUserRequest(this.requestedIdData.requestId, this.requestedIdData).subscribe((res) => {
        this.resolvedData = res;
        this.router.navigateByUrl('/home/user-requests')

      })
    }
    else {
      alert("Enter info")
    }
  }

  // to reassign the open request data
  reassignRequest() {
    this.requestedIdData.info = this.info;
    if (this.requestedIdData.info != null) {
      this.ds.reassignUserRequest(this.requestedIdData.requestId, this.requestedIdData).subscribe((res) => {
        this.closedData = res;
        this.router.navigateByUrl('/home/user-requests')
      })
    } else {
      alert("Enter Info")
    }
  }
  // to save the reassigned data in info table
  reassign() {
    this.reassignedData.adminInfo = this.info;
    this.reassignedData.userInfo = this.requestedIdData.ticketDescription;
    this.reassignedData.requestId = this.requestedIdData.requestId;
    console.log(this.reassignedData);

    this.ds.saveReassignedData(this.reassignedData).subscribe((res) => {
      this.recievedData = res;
    })
  }

 


}
