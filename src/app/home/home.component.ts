import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

background=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl("/home/user-requests")
  }
onChild2Clicked(bg:boolean){
 
  
this.background =bg;


}

}
