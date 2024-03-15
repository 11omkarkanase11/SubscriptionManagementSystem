import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import { LocalService } from '../local.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allplan',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './allplan.component.html',
  styleUrl: './allplan.component.css'
})
export class AllplanComponent implements OnInit{
  
 
  allPlans:any []=[];
  constructor(private service: SubscriptionService, private localservice :LocalService, private router: Router){

  }

  userId = this.localservice.getItem("userId");
ngOnInit(): void {
  this.service.viewAllPlan(this.userId).subscribe(
    (response)=>{
      console.log(response);
      this.allPlans= response;
    }
  )
}

addPlan(planId: string, planCost: any, serviceName: any, duration :any){

  this.localservice.setItem("planId", planId);
  this.localservice.setItem("amount", planCost);
  this.localservice.setItem("serviceName", serviceName);
  this.localservice.setItem("duration", duration);

  this.router.navigate(['addplan']);

}
  

}
