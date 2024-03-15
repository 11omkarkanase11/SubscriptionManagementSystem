import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import {  HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name='';
  email='';
  userId='';
  password='';
  constructor(private singupservice : SubscriptionService, private router: Router) {
    
  }
  signup(){
      this.singupservice.signup(this.userId, this.password,this.email,this.name).subscribe(
        (response)=>{
          if(response){
             this.router.navigate(['login']);
          }
          else{
            alert("Account Not Created");
          }
        }
      )
  }
  

}
