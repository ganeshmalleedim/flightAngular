import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public userRegisterForm:FormGroup;

  constructor(private getAirlineServices:GetAirlinesService,
    private formBuilder:FormBuilder,private router:Router)
     { 
      this.userRegisterForm= new FormGroup({
        username:new FormControl(),
        password:new FormControl(),
        name:new FormControl(),
        phonenumber: new FormControl(),
      });
    }

  ngOnInit(): void {
  }
  public UserRegister(data:any):void{
    this.getAirlineServices.userCreate(data)
          .subscribe(res=>{alert(res+" register successfull");
          this.router.navigate(['userdashboard/userlogin']);
          // if(window.sessionStorage.getItem("LogSuccess") != null)
          //  {
          //      this.router.navigate(['admindashboard']);
          //      // .then(()=>{
          //      //   window.location.reload();
          //      // });
          //  }else
          //  {
          //    this.router.navigate(['adminlogin'])
          //    .then(()=>{
          //      window.location.reload();
          //    })
          //  }
          
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
