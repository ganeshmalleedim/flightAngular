import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingFlightComponent } from './booking-flight/booking-flight.component';
import { GetAirlinesComponent } from './get-airlines/get-airlines.component';
import { GetticketComponent } from './getticket/getticket.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"userdashboard",component:UserDashBoardComponent,
   children:
   [
    {path:"searchflight",component:SearchFlightsComponent},
    {path:"getticket",component:GetticketComponent},
    {path:"flightbook",component:BookingFlightComponent},
     {path:"userregister",component:UserRegisterComponent},
     {path:"userlogin",component:UserLoginComponent},
     
   ]
 },
  {path:"admindashboard",component:AdminDashBoardComponent,
    children:
    [{path:"",redirectTo:"/admindashboard/getairlines",pathMatch:"full"},
    {path:"getairlines",component:GetAirlinesComponent},
    {path:"addairline",component:AddAirlineComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  GetAirlinesComponent,AdminLoginComponent,AdminDashBoardComponent,AddAirlineComponent,
  UserDashBoardComponent,UserLoginComponent,UserRegisterComponent,SearchFlightsComponent,
  BookingFlightComponent,GetticketComponent
]