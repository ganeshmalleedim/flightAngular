import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  
  constructor(private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public RegisterUser():void
  {
    this.router.navigate(["userregister"],{relativeTo:this.activateRouter});
  }

  public UserLogin():void
  {
    this.router.navigate(["userlogin"],{relativeTo:this.activateRouter});
  }
  
  public SearchClick():void
  {
    this.router.navigate(["searchflight"],{relativeTo:this.activateRouter});
  }
  public getTicketDetails():void
  {
    this.router.navigate(["getticket"],{relativeTo:this.activateRouter});
  }
  
}
