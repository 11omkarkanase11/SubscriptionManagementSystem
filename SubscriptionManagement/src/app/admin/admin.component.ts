import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule,
  MatIcon,
  MatButtonModule
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  planId ='';
  serviceName ='';
  duration='';
  planCost='';
  planType='';

  constructor(private service : SubscriptionService, private router :Router){}

  addPlan(){
      this.service.addPlanByAdmin(this.planId,this.serviceName,this.duration,this.planCost, this.planType).subscribe(
        (response)=>{
          if(response){
            alert("Plan added");
          }
        }
      )
  }

   viewAll(){
    this.router.navigate(['viewallplan'])
   }
   logout(){
    this.router.navigate(['login']);
   }

}
