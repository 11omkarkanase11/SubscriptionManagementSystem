import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateplan',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './updateplan.component.html',
  styleUrl: './updateplan.component.css'
})
export class UpdateplanComponent {

 

  constructor(private localservice :LocalService,private subscriptionservice: SubscriptionService){

  }

  userId = this.localservice.getItem("userId");
 
  amount =this.localservice.getItem("requireAmount") ;
  planId = this.localservice.getItem("planId");
  planCost = this.localservice.getItem("planCost");
  duration= this.localservice.getItem("duration");
  newPlanId = this.localservice.getItem("newPlanId");
  

  pay(){
    this.subscriptionservice.updatePlan(this.localservice.getItem("userId"), this.localservice.getItem("planId"), this.planCost, this.duration, this.newPlanId).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          alert("Plan Updated") 
         
        }
        else {
          alert("Plan Not Updated");
        }
      }
    )

  }

}
