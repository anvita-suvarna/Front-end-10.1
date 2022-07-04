import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  arrivalLocation ='';
  departureLocation='';
  date = '';


  baseUrl='http://localhost:9090/bus/details/createbus';

  constructor(private http:HttpClient) { }

  newBus(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  getBusesList():Observable<any>
  {
    return this.http.get( `${this.baseUrl}`);
  }
 
  deleteBus(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
}

