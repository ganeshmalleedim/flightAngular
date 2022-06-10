import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { GetAirlinesService } from '../MyServices/get-airlines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public AdminLoginForm:FormGroup;

  constructor(private getAirlineServices:GetAirlinesService,
    private formBuilder:FormBuilder,private router:Router) { 
    // this.AdminLoginForm=this.formBuilder.group({
    //  AdminId: [''],
    //  username:[''],
    //  password:[''],
    //  AdminName:[''] 
     //});
     this.AdminLoginForm= new FormGroup({
       username:new FormControl(),
       password:new FormControl(),
     });
    
  }

  ngOnInit(): void {
   
  }
   public AdiminLogin(data:any):void{
     this.getAirlineServices.adminLogin(data)
           .subscribe(res=>{alert(res+" login succesful");
           if(window.sessionStorage.getItem("LogSuccess") != null)
            {
                this.router.navigate(['admindashboard']);
                // .then(()=>{
                //   window.location.reload();
                // });
            }else
            {
              this.router.navigate(['adminlogin'])
              .then(()=>{
                window.location.reload();
              })
            }
           
          },
           error=>{
             alert(error);
             this.router.navigate(['/adminlogin'])
             .then(()=>{
               window.location.reload();
             })
            });
           
                    
   }

}
