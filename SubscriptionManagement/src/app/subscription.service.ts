import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  
  url ="http://192.168.5.107:8080/sakshi"
  constructor(private http: HttpClient) { }

  login(userId:any, password:any):Observable<any>{

     return this.http.get<any>(`${this.url}/login/${userId}/${password}`);
  }
}
