import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // For cards
import { MatListModule } from '@angular/material/list';   // For lists
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubscriptionService } from '../subscription.service';
import { LocalService } from '../local.service';
import { response } from 'express';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [FormsModule, CommonModule ,MatCardModule, MatListModule,MatIcon, MatButtonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})

export class HistoryComponent implements OnInit{
  userId=''
  userPlans: any[] = [];
  constructor(private localservice : LocalService,private subscriptionService:SubscriptionService){}
  ngOnInit(): void {

    const storedUserId = this.localservice.getItem('userId');
    if (storedUserId) {
      this.userId = storedUserId;

      // Call the method to fetch user plans and subscribe to it
      this.subscriptionService.getHistory(this.userId).subscribe(
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

}
