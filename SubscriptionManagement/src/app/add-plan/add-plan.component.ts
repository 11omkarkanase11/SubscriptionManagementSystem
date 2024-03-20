import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-plan',
  standalone: true,
  imports: [MatButtonModule, MatIcon, CommonModule],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {

  constructor(private localservice : LocalService, private service :SubscriptionService) {}
  
  planId = this.localservice.getItem("planId");
  serviceName= this.localservice.getItem("serviceName");
  userAmount = this.localservice.getItem("amount");
  userId = this.localservice.getItem("userId");
  duration = this.localservice.getItem("duration");

  pay(){
    this.service.addPlan(this.userId, this.planId, this.userAmount, this.duration).subscribe(
      (response)=>{
        if(response){
          alert("Plan added ");
        }
        else{
          alert("Plan does Not added");
        }
      }
    )
  }

}
