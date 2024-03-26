import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { MatCardModule } from '@angular/material/card'; // For cards
import { MatListModule } from '@angular/material/list';   // For lists
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewallplan',
  standalone: true,
  imports: [FormsModule, CommonModule ,MatCardModule, MatListModule,MatIcon, MatButtonModule],
  templateUrl: './viewallplan.component.html',
  styleUrl: './viewallplan.component.css'
})
export class ViewallplanComponent implements OnInit {
  constructor(private service : SubscriptionService){}
  allPlans:any []=[];
  groupedPlans: { [serviceName: string]: any[] } = {};
  ngOnInit(): void {
    this.service.getAllPlan().subscribe(
      (response)=>{
        console.log(response);
        this.allPlans= response;
        this.allPlans.sort((a, b) => (a.serviceName > b.serviceName) ? 1 : -1);
        this.groupPlansByServiceName();
      }
    )
  }
  groupPlansByServiceName(): void {
    for (const plan of this.allPlans) {
      if (!this.groupedPlans[plan.serviceName]) {
        this.groupedPlans[plan.serviceName] = [];
      }
      this.groupedPlans[plan.serviceName].push(plan);
    }
  }
  
  getServiceNames(): string[] {
    return Object.keys(this.groupedPlans);
  }
}
