import { Component, OnInit } from '@angular/core';
import { Info } from '../model/info';
import { Requestmodel } from '../model/requestmodel';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-request-closed',
  templateUrl: './user-request-closed.component.html',
  styleUrls: ['./user-request-closed.component.css']
})
export class UserRequestClosedComponent implements OnInit {
  requestedIdData!: Requestmodel;
  recievedReassignedData!: Info[];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.requestedIdData = this.ds.closeData;
    // to get the reassigned data

    this.ds.getReassignedData(this.requestedIdData.requestId).subscribe((res) => {
      this.recievedReassignedData = res;
      console.log(this.recievedReassignedData);

    })

  }

}
