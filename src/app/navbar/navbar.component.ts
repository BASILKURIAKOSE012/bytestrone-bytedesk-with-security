import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() childClicked = new EventEmitter<boolean>();
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {

    // this is empty
  }
  // to log out from application

  logout(){
    sessionStorage.clear()
    sessionStorage.setItem("login","false")
    this.router.navigateByUrl("")
  }

  // to change theme
  onChangeTheme(){
    this.childClicked.emit(true)
  }

  // to change to default theme
  onChangeDefault(){
   
    
    this.childClicked.emit(false)
  }
}
