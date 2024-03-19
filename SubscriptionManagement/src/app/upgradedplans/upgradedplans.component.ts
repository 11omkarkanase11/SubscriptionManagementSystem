import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upgradedplans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upgradedplans.component.html',
  styleUrl: './upgradedplans.component.css'
})
export class UpgradedplansComponent implements OnInit {

  userId = ''
  amount = 0;
  planId = ''
  userPlans: any[] = [];
  displayBalance = false;
  constructor(private localservice: LocalService, private subscriptionService: SubscriptionService, private router: Router) { }
  ngOnInit(): void {
    const storedUserId = this.localservice.getItem('userId');
    if (storedUserId) {
      this.userId = storedUserId;

      this.subscriptionService.displayUpgradablePlans(this.localservice.getItem('planId'), this.localservice.getItem('serviceName')).subscribe(
        (response) => {
          console.log(response);
          this.userPlans = response;
          
   

        },
        (error) => {
          console.error('Error fetching user plans:', error);
          // Handle error here
        }
      );
    }
  }

  updatenewplan(planId: string, planCost: number, duration: number, serviceName: string) {
    this.localservice.setItem("newPlanId", planId);

    this.subscriptionService.requiredAmount(this.localservice.getItem("planId"), planId).subscribe(
      (response) => {
        this.displayBalance = true;
        this.amount = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching user plans:', error);
      }
    );

   

  }
  pay(planId: string, planCost: number, duration: number, serviceName: string){
    this.subscriptionService.updatePlan(this.localservice.getItem("userId"), this.localservice.getItem("planId"), planCost, duration, planId).subscribe(
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
