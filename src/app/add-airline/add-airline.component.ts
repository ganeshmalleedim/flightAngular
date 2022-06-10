import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

    public addairlineform:FormGroup;

  constructor(private getAirlineServices:GetAirlinesService,
    private formBuilder:FormBuilder,private router:Router) { 

      this.addairlineform= new FormGroup({
        Flightname:new FormControl(),
        Source:new FormControl(),
        Destination:new FormControl(),
        StartDatetime: new FormControl(),
        EndDateTime:new FormControl(),
        InstrumentsUsed:new FormControl(),
        SheduleDays:new FormControl(),
        totalNoOfBusinessClassSeats: new FormControl(),
        totalNoOfNonBusinessClassSeats: new FormControl(),
        OnewayPrice:new FormControl(),
        RoundtripPrice:new FormControl(),
        NoOfRows:new FormControl(),
        Meal: new FormControl(),
      });
    }

  ngOnInit(): void {
  }

  public AddAirline(data:any):void{
    this.getAirlineServices.AddAirline(data)
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
