import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

public UserLoginForm:FormGroup;
constructor(private getAirlineServices:GetAirlinesService,
  private formBuilder:FormBuilder,private router:Router) {
    this.UserLoginForm= new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
    });

   }

  ngOnInit(): void {
  }

  public UserLogin(data:any):void{
    this.getAirlineServices.userLogin(data)
          .subscribe(res=>{alert(res+" login succesful");
          if(window.sessionStorage.getItem("LoginSuccess") != null)
           {
               this.router.navigate(['userdashboard']);
               // .then(()=>{
               //   window.location.reload();
               // });
           }else
           {
             this.router.navigate(['userlogin'])
             .then(()=>{
               window.location.reload();
             })
           }
          
        //  },
        //   error=>{
        //     alert(error);
        //     this.router.navigate(['/adminlogin'])
        //     .then(()=>{
        //       window.location.reload();
        //     })
           });
                
  }

}