import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-plan',
  standalone: true,
  imports: [MatButtonModule, MatIcon, CommonModule],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {

  constructor(private localservice : LocalService, private service :SubscriptionService, private router: Router) {}
  
  planId = this.localservice.getItem("planId");
  serviceName= this.localservice.getItem("serviceName");
  userAmount = this.localservice.getItem("amount");
  userId = this.localservice.getItem("userId");
  duration = this.localservice.getItem("duration");
  planType = this.localservice.getItem("planType");

  pay(){
    this.service.checkPlan(this.userId, this.planId).subscribe(
      (response)=>{
        if(response){
          alert("This plan is already in use");
        }
        else{
          this.service.addPlan(this.userId, this.planId, this.userAmount, this.duration).subscribe(
            (response)=>{
              if(response){
                alert("Plan added ");
               this.localservice.addClicked(this.serviceName, this.planType);
                this.router.navigate(['sidenav/dashboard'])
              }
              else{
                alert("Plan does Not added");
              }
            }
          )

        }
      }
    )
   
  }

}
