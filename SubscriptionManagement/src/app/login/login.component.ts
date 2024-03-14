import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterEvent, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionService } from '../subscription.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
  constructor(private loginservice : SubscriptionService,private router: Router){}

  userId='';
  password='';

  login(){
      this.loginservice.login(this.userId, this.password).subscribe(
        (response)=>{
          if(response==1){
            alert("Login Success");
            this.router.navigateByUrl('/dashboard');
          }
          if(response==2){
            alert("Password Invalid");
          }
          if(response==3){
            alert("InValid Credentials");
          }
        }
      )
  }

}
