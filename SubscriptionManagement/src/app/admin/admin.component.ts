import { Component, OnInit } from '@angular/core';
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
export class AdminComponent implements OnInit {
  planId ='';
  serviceName ='';
  duration='';
  planCost='';
  planType='';
  serviceNames:any []=[];
  

  ngOnInit(): void {
    this.service.serviceName().subscribe(
      (response)=>{
        this.serviceNames= response;
        console.log(this.serviceNames);
      }
    )
  }
  constructor(private service : SubscriptionService, private router :Router){}
  addNew = false;
  handleChange() {
    if (this.serviceName === 'addNew') {
      this.addNew= true;
      this.serviceName = ''; // Reset new service name input field
    }
    else{
      this.addNew= false;
    }
  }
  check= false;
  input(){
    this.service.planIdExists(this.planId).subscribe(
      (response)=>{
        if(response){
          alert("PlanId already Exists");
        }
        else{
          this.check= true;
        }
      }
    )
  }

  addPlan(){
    
      this.service.addPlanByAdmin(this.planId,this.serviceName,this.duration,this.planCost, this.planType).subscribe(
        (response)=>{
          if(response){
            alert("Plan added");
            this.router.navigate(['viewallplan']);
          }
        },(error)=>{
          console.log("Something went wrong ");
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
