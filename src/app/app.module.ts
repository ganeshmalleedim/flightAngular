import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAirlinesService } from './MyServices/get-airlines.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { BookingFlightComponent } from './booking-flight/booking-flight.component';
import { GetticketComponent } from './getticket/getticket.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    UserRegisterComponent,
    UserLoginComponent,
    SearchFlightsComponent,
    BookingFlightComponent,
    GetticketComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GetAirlinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
