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

  pushNotification(planId: any){
      this.count++;
      console.log(this.count);
      this.notifications.push("Plan Cancelled: "+ planId );
      console.log(this.notifications);
     
  }

  updateNotification(){
    this.count++;
    console.log(this.count);
    this.notifications.push("Plan Updated: " );
  }

  addNotification(){
    this.count++;
    console.log(this.count);
    this.notifications.push("Plan Added: " );
    console.log(this.notifications);
  }
  private subject = new Subject<any>();
  sendClicked(planId:any){
    this.pushNotification(planId);
    this.subject.next(1);
  }
  getClicked(){
    return this.subject.asObservable();
  }

  addClicked(){
    this.addNotification();
    this.subject.next(1);
  }
  clearNotification(){
    this.count=0;
    this.notifications=[];
    this.subject.next(1);
  }
  updateClicked(){
    this.updateNotification();
    this.subject.next(1);
  }
}

