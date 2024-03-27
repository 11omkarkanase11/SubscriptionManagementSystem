import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  // cardNumber : string = "";

   // Set a value in local storage
   setItem(key: string, value: string): void {
    // this.cardNumber = value;
    localStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
  
  notifications: string[] = [];
  
  count =0;

  pushNotification(serviceName: any, planType: any){
      this.count++;
      console.log(this.count);
      this.notifications.push("Plan Cancelled: "+ serviceName + "("+ planType +")");
      console.log(this.notifications);
     
  }

  updateNotification(serviceName:any){
    this.count++;
    console.log(this.count);
    this.notifications.push("Plan Updated: "+ serviceName );
  }

  addNotification(serviceName: any, planType:any){
    this.count++;
    console.log(this.count);
    this.notifications.push("Plan Added: "+ serviceName +"("+ planType + ")");
    console.log(this.notifications);
  }
  private subject = new Subject<any>();
  sendClicked(serviceName:any, planType: any){
    this.pushNotification(serviceName, planType);
    this.subject.next(1);
  }
  getClicked(){
    return this.subject.asObservable();
  }

  addClicked(serviceName: any, planType: any){
    this.addNotification(serviceName, planType);
    this.subject.next(1);
  }
  clearNotification(){
    this.count=0;
    this.notifications=[];
    this.subject.next(1);
  }
  updateClicked(serviceName:any){
    this.updateNotification(serviceName);
    this.subject.next(1);
  }
  expireClicked(serviceName :any,planType :any, remainingDays:any){
    this.expireNotification(serviceName, planType, remainingDays);
    this.subject.next(1);
  }
  expireNotification(serviceName :any,planType :any, remainingDays:any){
    this.count++;
    this.notifications.push("Your " + serviceName + "("+ planType + ")" + " plan will expire in "+ remainingDays +" days");
  }
}

