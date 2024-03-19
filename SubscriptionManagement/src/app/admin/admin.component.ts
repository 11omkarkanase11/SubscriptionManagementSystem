import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  planId ='';
  serviceName ='';
  duration='';
  planCost='';

  constructor(private service : SubscriptionService, private router :Router){

  }

  addPlan(){
      this.service.addPlanByAdmin(this.planId,this.serviceName,this.duration,this.planCost).subscribe(
        (response)=>{
          if(response){
            alert("Plan added");
          }
        }
      )
  }

}
