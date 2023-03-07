import { Component, OnInit } from '@angular/core';
import { Info } from '../model/info';
import { Requestmodel } from '../model/requestmodel';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-request-resolved',
  templateUrl: './user-request-resolved.component.html',
  styleUrls: ['./user-request-resolved.component.css']
})
export class UserRequestResolvedComponent implements OnInit {
  requestedIdData!: Requestmodel;
  recievedReassignedData!: Info[];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.requestedIdData = this.ds.resolveData;

    // to get the reassigned data

    this.ds.getReassignedData(this.requestedIdData.requestId).subscribe((res) => {
      this.recievedReassignedData = res;
    

    })
  }

}
