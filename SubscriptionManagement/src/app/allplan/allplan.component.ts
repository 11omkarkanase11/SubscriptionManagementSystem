import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import { LocalService } from '../local.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // For cards
import { MatListModule } from '@angular/material/list';   // For lists
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Import additional modules as needed (e.g., MatIconModule for icons)

@Component({
  selector: 'app-allplan',
  standalone: true,
  imports: [FormsModule, CommonModule,MatCardModule, MatListModule,MatIcon, MatButtonModule],
  templateUrl: './allplan.component.html',
  styleUrl: './allplan.component.css'
 
})
export class AllplanComponent implements OnInit{
  
 
  allPlans:any []=[];
  serviceName='';
  groupedPlans: { [serviceName: string]: any[] } = {};
  constructor(private service: SubscriptionService, private localservice :LocalService, private router: Router){

  }

  userId = this.localservice.getItem("userId");
ngOnInit(): void {
  this.service.viewAllPlan(this.userId).subscribe(
    (response)=>{
      console.log(response);
      this.allPlans= response;
      this.allPlans.sort((a, b) => (a.serviceName > b.serviceName) ? 1 : -1);
      this.groupPlansByServiceName();
    }
  )
  
}

addPlan(planId: string, planCost: any, serviceName: any, duration :any, planType:any){

  this.localservice.setItem("planId", planId);
  this.localservice.setItem("amount", planCost);
  this.localservice.setItem("serviceName", serviceName);
  this.localservice.setItem("duration", duration);
  this.localservice.setItem("planType", planType);
  this.router.navigate(['sidenav/addplan']);
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
isHovered = false;

cardHovered() {
  this.isHovered = true;
}

cardLeft() {
  this.isHovered = false;
}

}