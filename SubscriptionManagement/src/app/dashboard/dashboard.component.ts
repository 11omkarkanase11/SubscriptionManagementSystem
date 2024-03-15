import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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
  constructor(private localservice : LocalService,private subscriptionService:SubscriptionService, private router: Router){}
  ngOnInit(): void {
    const storedUserId = this.localservice.getItem('userId');
    if (storedUserId) {
      this.userId = storedUserId;

      // Call the method to fetch user plans and subscribe to it
      this.subscriptionService.displayUserPlans(this.userId).subscribe(
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

  upgrade(planId: string, serviceName: string){
    this.router.navigateByUrl('/upgradedplans');
    this.localservice.setItem("planId", planId);
    this.localservice.setItem("serviceName",serviceName);
  }

  viewPlans(){
    this.router.navigate(['allplan']);
  }

}
