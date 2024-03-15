import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  
  url ="http://192.168.5.107:8080/sakshi"
  url1="http://192.168.5.104:8080/omkar"
  constructor(private http: HttpClient) { }

  login(userId:any, password:any):Observable<any>{

     return this.http.get<any>(`${this.url}/login/${userId}/${password}`);
  }

  displayUserPlans(userId:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getuserplans/${userId}`);
  }

displayUpgradablePlans(planId:any, serviceName:any){
return this.http.get<any>(`${this.url}/getupgradedplans/${planId}/${serviceName}`);
}

  singup(userId:any, password:any, email:any, name:any):Observable<any>{
    const dto={
      userId:userId,
      password:password,
      email:email,
      name:name
    };
   return this.http.post<any>(`${this.url1}/signup`,dto);
  }

  updatePlan(userId:any,planId:any,planCost:any,duration:any,newPlanId:any){
const dto={
userId:userId,
  planId:planId,
  userAmount:planCost,
  duration:duration,
  newPlanId:newPlanId
};
return this.http.post<any>(`${this.url1}/updateplan`,dto);

  }

}
