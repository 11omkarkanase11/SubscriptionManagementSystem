import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upgradedplans',
  standalone: true,
  imports: [],
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

     
    }
  }

  updatenewplan(){

  }
}
