import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IGetTicket } from '../Models/IGetTicket';
import { GetAirlinesService } from '../MyServices/get-airlines.service';

@Component({
  selector: 'app-getticket',
  templateUrl: './getticket.component.html',
  styleUrls: ['./getticket.component.css']
})
export class GetticketComponent implements OnInit {
  
  public ticketList:IGetTicket[]=[];
  public GetTicketForm:FormGroup;

  constructor(private getAirlineServices:GetAirlinesService,
    private formBuilder:FormBuilder,private router:Router) {
      
      this.GetTicketForm= new FormGroup({
          pnr:new FormControl(),
        
      });
    }

  ngOnInit(): void {
  }

  public getTicket(data:any){
    this.getAirlineServices.getTicket(data)
          .subscribe(res=>{
            this.ticketList=res
            // alert(res+" register successfull");
          console.log("There are all details",res);
           });
    }


}
