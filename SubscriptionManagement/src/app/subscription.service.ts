import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  


//sakshi's url
//     url ="http://192.168.5.107:8080/sakshi"
//   url1="http://192.168.5.107:8081/omkar"

  //omkar's url
  url ="http://192.168.5.104:8081/sakshi"
  url1="http://192.168.5.104:8080/omkar"


  constructor(private http: HttpClient) { }

  login(userId:any, password:any):Observable<any>{

     return this.http.get<any>(`${this.url}/login/${userId}/${password}`);
  }

  displayUserPlans(userId:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getuserplans/${userId}`);
  }


//   
   displayUpgradablePlans(planId:any, serviceName:any){
return this.http.get<any>(`${this.url}/getupgradedplans/${planId}/${serviceName}`);
}

  signup(userId:any, password:any, email:any, name:any):Observable<any>{
    const dto={
      userId:userId,
      password:password,
      email:email,
      name:name
    };
   return this.http.post<any>(`${this.url1}/signup`,dto);
  }

  viewAllPlan(userId:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getallplans/${userId}`);
  }

  addPlan(userId: any, planId:any, userAmount:any, duration:any):Observable<any>{
     const dto={
      userId: userId,
      planId: planId, 
      userAmount: userAmount,
      duration: duration
     }
     return this.http.post(`${this.url1}/addplaninuser`, dto)
  }


  updatePlan(userId:any,planId:any,planCost:any,duration:any,newPlanId:any):Observable<any>{
const dto={
userId:userId,
  planId:planId,
  userAmount:planCost,
  duration:duration,
  newPlanId:newPlanId
};
return this.http.post<any>(`${this.url1}/updateplan`,dto);

  }

  requiredAmount(planId:any,newPlanId:any):Observable<any>{
return this.http.get<any>(`${this.url1}/requireamount/${planId}/${newPlanId}`);
  }
  addPlanByAdmin(planId :any, serviceName:any , duration: any, planCost:any, planType:any){
    const dto={
      planId:planId,
      serviceName:serviceName,
      duration:duration,
      planCost:planCost,
      planType:planType
    }
    return this.http.post<any>(`${this.url1}/addplan`,dto)
}

  checkPlan(userId:any, planId:any):Observable<any>{
    return this.http.get<any>(`${this.url}/checkexplan/${userId}/${planId}`);
  }

  getAllPlan():Observable<any>{
   return this.http.get<any>(`${this.url1}/viewallplanadmin`);
  }

  cancelPlan(userId: any, planId:any):Observable<any>{
   return this.http.get<any>(`${this.url}/cancelplan/${planId}/${userId}`)
  }
  getRole(userId:any):Observable<any>{
    return this.http.get<any>(`${this.url1}/getrole/${userId}`);
  }

  getHistory(userId: any):Observable<any>{
    return this.http.get<any>(`${this.url}/viewhistory/${userId}`);
  }
  
  serviceName():Observable<any>{
    return this.http.get<any>(`${this.url1}/getservices`);
  }

  planIdExists(planId:any):Observable<any>{
    return this.http.get<any>(`${this.url1}/checkplanid/${planId}`)
  }

}
