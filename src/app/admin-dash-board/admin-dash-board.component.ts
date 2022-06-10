import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  constructor(private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
    
  //Add Airline click event
  public addAirlineClick():void
  {
    this.router.navigate(["addairline"],{relativeTo:this.activateRouter});
  }

  //get Airline click event
  public getAirlineClick():void
  {
    this.router.navigate(["getairlines"],{relativeTo:this.activateRouter});
  }

  
}
