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
export class UpgradedplansComponent implements OnInit{

  userId=''
  planId=''
  userPlans: any[] = [];
  constructor(private localservice : LocalService,private subscriptionService:SubscriptionService, private router: Router){}
  ngOnInit(): void {
    const storedUserId = this.localservice.getItem('userId');
    if (storedUserId) {
      this.userId = storedUserId;

      this.subscriptionService.displayUpgradablePlans(this.localservice.getItem('planId'),this.localservice.getItem('serviceName')).subscribe(
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

  updatenewplan(){

  }
}
