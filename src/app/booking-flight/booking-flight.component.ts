import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-booking-flight',
  templateUrl: './booking-flight.component.html',
  styleUrls: ['./booking-flight.component.css']
})
export class BookingFlightComponent implements OnInit {

  public bookFlightForm:FormGroup;
  


  constructor(private router:Router,private getAirlineServices:GetAirlinesService,
    private activateRouter:ActivatedRoute,private formBuilder:FormBuilder) { 
      var data=  window.sessionStorage.getItem("res");
    this.bookFlightForm=this.formBuilder.group({
      flightNo:[window.sessionStorage.getItem("res")],
      name:[''],
      gender:[''],
      phone:[''],
      Flightname:[''],
      Source:[''],
      destination:[''],
      StartDateTime:[''],
      EndDatrTime:[''],
      SeatNo:[''],
      price:['']
    });

    // this.bookFlightForm= new FormGroup({
    //   flightno:new FormControl(),
    //   name:new FormControl(),
    //   phone:new FormControl(),
    //   flightname:new FormControl(),
    //   source:new FormControl(),
    //   destination: new FormControl(),
    //   start:new FormControl(),
    //   end:new FormControl(),
    //   seat:new FormControl(),
    //   price: new FormControl(),
    // });
  }

  ngOnInit(): void {
    
    // if(window.sessionStorage.getItem("flightNo")==null){
    //    this.router.navigate(['searchflight']);
    // }
        
     
     (data:any)=>{this.bookFlightForm.setValue(data)
      //  this.getAirlineServices.getflightByFlightNo(window.sessionStorage.getItem("flightNo"))
      //  .subscribe(data=>this.bookFlightForm.setValue(data));
      // this.getAirlineServices.getflightByFlightNo(window.sessionStorage.getItem("flightNo"))
      // .subscribe((data:any)=>{this.bookFlightForm.setValue(data);
      //   console.log("There are all details",data);});
        // console.log("There are all details",data);
        
        
    
  }

      

  // public bookFlight(data:any):void
  // {
    
  //   this.bookFlightForm= new FormGroup({
  //     flightno:new FormControl(),
  //     name:new FormControl(),
  //     phone:new FormControl(),
  //     gender:new FormControl(),
  //     flightname:new FormControl(),
  //     source:new FormControl(),
  //     destination: new FormControl(),
  //     start:new FormControl(),
  //     end:new FormControl(),
  //     seat:new FormControl(),
  //     price: new FormControl(),
  //   });
  //  }
}

  public bookFlight(data:any):void{
    this.bookFlightForm= new FormGroup({
      Flight_No:new FormControl(),
      name:new FormControl(),
      phone:new FormControl(),
      gender:new FormControl(),
      Flight_Name:new FormControl(),
      Source:new FormControl(),
      Destination: new FormControl(),
      StartDateTime:new FormControl(),
      endDateTime:new FormControl(),
      SeatNo:new FormControl(),
      price: new FormControl(),
    });
   
    this.getAirlineServices.Bookticket(data)
          .subscribe(res=>{alert(res+" booked successfull");
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
