import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-updateplan',
  standalone: true,
  imports: [MatIcon, CommonModule, MatButtonModule],
  templateUrl: './updateplan.component.html',
  styleUrl: './updateplan.component.css'
})
export class UpdateplanComponent {

 

  constructor(private localservice :LocalService,private subscriptionservice: SubscriptionService, private router : Router){

  }

  userId = this.localservice.getItem("userId");
 
  amount =this.localservice.getItem("requireAmount") ;
  planId = this.localservice.getItem("planId");
  planCost = this.localservice.getItem("planCost");
  duration= this.localservice.getItem("duration");
  newPlanId = this.localservice.getItem("newPlanId");
  serviceName = this.localservice.getItem("serviceName");
  

  pay(){
    this.subscriptionservice.checkPlan(this.userId, this.newPlanId).subscribe(
      (response)=>{
        if(response){
          alert("This plan is already in use");
        }else{
          this.subscriptionservice.updatePlan(this.localservice.getItem("userId"), this.localservice.getItem("planId"), this.planCost, this.duration, this.newPlanId).subscribe(
            (response) => {
              if (response) {
                console.log(response);
                alert("Plan Updated") ;
                this.localservice.updateClicked(this.serviceName);
                this.router.navigate(['sidenav/dashboard']);
                
               
              }
              else {
                alert("Plan Not Updated");
              }
            }
          )
        }
      }
    )
    

  }

}
