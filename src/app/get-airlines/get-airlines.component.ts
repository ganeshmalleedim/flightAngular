import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetAirlines } from '../Models/IGetAirlnes';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-get-airlines',
  templateUrl: './get-airlines.component.html',
  styleUrls: ['./get-airlines.component.css']
})
export class GetAirlinesComponent implements OnInit {

  public AirlineList:IGetAirlines[]=[];
  constructor(private getAirlineServices:GetAirlinesService,
    private router:Router,private activateRouter:ActivatedRoute
    ) {
      
   }

  ngOnInit(): void {
    this.getAirlineServices.GetAllAirlines().subscribe((data:any)=>{this.AirlineList=data;
      console.log("There are all details",data);
  });

 

}


public blockAirline(data:any){
  this.getAirlineServices.blockAirline(data.flightNo)
        .subscribe(res=>{alert(res+" block succesful")});
  }

}
