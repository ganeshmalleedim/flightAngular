import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AdminLoginInput } from '../Models/AdminDetails';
import { IGetAirlines } from '../Models/IGetAirlnes';
import { IGetTicket } from '../Models/IGetTicket';
import { userDetailsInput } from '../Models/UserRegisteration';

@Injectable({
  providedIn: 'root'
})
export class GetAirlinesService {
    
  public _Url="http://localhost:5173/api/Admin";
  public _Url1="http://localhost:34135/api/Flights";
  public _Url2="http://localhost:9005/api/Flights";

  constructor(private http:HttpClient) { 
    
  }

  //getAllAieline details
  public GetAllAirlines():Observable<IGetAirlines[]>
  {
    return this.http.get<IGetAirlines[]>(this._Url+"/getAirlines");
  }
//getticket by pnr service
public getTicket(data:any):Observable<IGetTicket[]>{
  const httOptions={headers:new HttpHeaders({'Content-Type':'application/json'}),
  responseType: 'text' as 'json' };
  return this.http.get<IGetTicket[]>(this._Url1
    +"/ticketbypnr?pnr="+data.pnr,httOptions)
  
  .pipe(catchError(this.httpErrorHandler));
}

  //block airline
  public blockAirline(flightNo:any):Observable<any>{
    const headers={'content-type':'application/json'}
    return this.http.delete(this._Url
      +"/BlockAirline?id="+flightNo,{'headers':headers})
    
    .pipe(catchError(this.httpErrorHandler));
    
  }
 
  
//Admin login service
  public adminLogin(data:any):Observable<string>{
    const httOptions={headers:new HttpHeaders({'Content-Type':'application/json'}),
    responseType: 'text' as 'json' };
    var inputObj= new AdminLoginInput();
    inputObj.AdminUn=data.username;
    inputObj.AdminPassword=data.password;
    window.sessionStorage.setItem("LogSuccess",data.username);
    return this.http.post<string>(this._Url
      +"/AdminLogin?userName="+data.username+"&password="+data.password,httOptions)
    
    .pipe(catchError(this.httpErrorHandler));
  }

    
//user login service
public userLogin(data:any):Observable<string>{
  const httOptions={headers:new HttpHeaders({'Content-Type':'application/json'}),
  responseType: 'text' as 'json' };
  // var inputObj= new AdminLoginInput();
  // inputObj.AdminUn=data.username;
  // inputObj.AdminPassword=data.password;
  window.sessionStorage.setItem("LoginSuccess",data.username);
  return this.http.post<string>(this._Url1
    +"/UserLogin?userName="+data.username+"&password="+data.password,httOptions)
  
  .pipe(catchError(this.httpErrorHandler));
}

  //user  register service
  public userCreate(data:any):Observable<string>{
    const headers={'content-type':'application/json'}
    var userInputObj= new userDetailsInput();
    // inputObj.AdminUn=data.username;
    // inputObj.AdminPassword=data.password;
      
    return this.http.post<string>(this._Url1
      +"/UserRegister",JSON.stringify(data),{'headers':headers})
    
    .pipe(catchError(this.httpErrorHandler));
    
  }

  
     //AddAirline service
   public AddAirline(data:any):Observable<any>{
    const headers={'content-type':'application/json'}
    //var userInputObj= new userDetailsInput();
    // inputObj.AdminUn=data.username;
    // inputObj.AdminPassword=data.password;
      
    return this.http.post(this._Url
      +"/addAirline",JSON.stringify(data),{'headers':headers})
    
    .pipe(catchError(this.httpErrorHandler));
    
  }

   //flight search service
   public searchFlight(data:any):Observable<any>{
    const headers={'content-type':'application/json'}
    var userInputObj= new userDetailsInput();
    // inputObj.AdminUn=data.username;
    // inputObj.AdminPassword=data.password;
      
    return this.http.post(this._Url1
      +"/FlightSearch?source="+data.source+"&destination="+data.destination,{'headers':headers})
    
    .pipe(catchError(this.httpErrorHandler));
    
  }

  //book ticket
  public Bookticket(data:any):Observable<string>{
    const headers={'content-type':'application/json'}
    var userInputObj= new userDetailsInput();
    // inputObj.AdminUn=data.username;
    // inputObj.AdminPassword=data.password;
      
    return this.http.post<string>(this._Url1
      +"/TicketBooking",JSON.stringify(data),{'headers':headers})
    
    .pipe(catchError(this.httpErrorHandler));
    
  }
  //flight get details

  public getflightByFlightNo(data:any):Observable<any>{
    return this.http.get<any>(this._Url1+"/getFlightByFlightNo?flightno="+data.flightNo)
  }


  //All webapi error collection
  httpErrorHandler(error:HttpErrorResponse){
     return throwError(error.status||"Server Error");
  }
}
