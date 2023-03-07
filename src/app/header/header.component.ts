
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserName!: string;
  currentUserSalutation!: string;
  date!: Date;
  id!: unknown;
  image!: unknown;
  message!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.image = sessionStorage.getItem('image') || "";
    this.getDate();

    this.id = setInterval(() => {
      this.getDate();
    }, 1000);


    this.getUserDetails();

  }

// to show date on the top

  getDate() {
    this.date = new Date();
    const hrs: number = this.date.getHours()

    if (hrs < 12) {
      this.message = "Good morning"
    }
    else if (hrs < 18) {
      this.message = "Good Afternoon"

    }
    else {
      this.message = "Good Evening"

    }


  }

  // to show user details on the top
  getUserDetails() {
    this.currentUserName = sessionStorage.getItem("userId") || '';
    this.currentUserSalutation = sessionStorage.getItem("salutation") || '';

  }


}
