import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  public flightList:any;
  public serachFlightForm:FormGroup;

  constructor(private getAirlineServices:GetAirlinesService,
    private formBuilder:FormBuilder,private router:Router,private activateRouter:ActivatedRoute) 
    {
      this.serachFlightForm= new FormGroup({
        source:new FormControl(),
        destination:new FormControl(),
      });

     }

  ngOnInit(): void {
  }

  
  public SearchFlightClick(data:any){
    this.getAirlineServices.searchFlight(data)
          .subscribe(res=>{
            this.flightList=res
            // alert(res+" register successfull");
          console.log("There are all details",res);
          // this.router.navigate(['userdashboard/userlogin']);
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
  


  //bookInfo method

  // public bookInfo(data:any):void{
  //    window.sessionStorage.setItem("flightNo",data);
     
  //    this.router.navigate(['userdashboard/flightbook']);
  // }

  public bookInfo(data:any){
    this.getAirlineServices.getflightByFlightNo(data)
          .subscribe(res=>{console.log(res);window.sessionStorage.setItem("res",res)});
          this.router.navigate(['userdashboard/flightbook']);
    }
}
