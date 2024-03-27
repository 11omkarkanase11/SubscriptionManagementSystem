import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NotificationComponent } from '../notification/notification.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  serviceName=''
  planEndDate: Date | null = null;
  remainingDuration=0;
  planCost=0;
  userId=''
  planId=''
  userPlans: any[] = [];
  
userName = this.localservice.getItem("userName");
count =0;
 
  constructor(private localservice : LocalService,private subscriptionService:SubscriptionService, private router: Router, private notifies : NotificationComponent){
    
  }
 
  
  ngOnInit(): void {
   
    this.count =this.localservice.count;
    const storedUserId = this.localservice.getItem('userId');
    
    if (storedUserId) {
      this.userId = storedUserId;

      // Call the method to fetch user plans and subscribe to it
      this.subscriptionService.displayUserPlans(this.userId).subscribe(
        (response) => {
          console.log(response);
        
          this.userPlans = response;
          for(const plan of this.userPlans){
            if(plan.remainingDays < 2){
             
             this.localservice.expireClicked(plan.serviceName, plan.planType, plan.remainingDays);
            }
         }
          
        },
        (error) => {
          console.error('Error fetching user plans:', error);
          // Handle error here
        }
      );
    }
  }

  upgrade(planId: string, serviceName: string){
    this.router.navigateByUrl('/sidenav/upgradedplans');
    this.localservice.setItem("planId", planId);
    this.localservice.setItem("serviceName",serviceName);
  }

  viewPlans(){
    this.router.navigate(['allplan']);
  }
  cancel(planId : string, serviceName: string, planType: string){
    const userId = this.localservice.getItem('userId');
    this.subscriptionService.cancelPlan( userId, planId).subscribe(
      (response)=>{
        console.log(response);
        
        if(response){
         
          this.localservice.sendClicked(serviceName, planType);
          alert("Plan Cancelled ");
          this.router.navigate(['sidenav/allplan']);
        }
        else{
          
        }
      }
    )

  }
  isHovered = false;

cardHovered() {
  this.isHovered = true;
}

cardLeft() {
  this.isHovered = false;
}
}
