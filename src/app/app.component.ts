import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public flagAnony:boolean;
  public flagDashboard:boolean;
  constructor(private router:Router)
  {
    this.flagAnony=true;
    this.flagDashboard=false;
  }
  ngOnInit(): void{
    this.flagAnony=true;
      this.flagDashboard=false;
    // if(window.sessionStorage.getItem("LogSuccess")==null)
    // {
    //   this.flagAnony=false;
    //   this.flagDashboard=true;
    // }
    // else
    // {
    //   this.flagAnony=true;
    //   this.flagDashboard=false;
    // }
  }
  public UserClick():void
 {
   this.router.navigate(["userdashboard"])
 }

 public Logout():void
 {
   this.router.navigate(["adminlogin"])
 }
 
}

