import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterEvent, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionService } from '../subscription.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalService } from '../local.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,CommonModule,HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
  constructor(private loginservice : SubscriptionService , private localservice : LocalService, private router: Router){}

  userId='';
  password='';
  name='';
  email='';



  
  login(){
    if(this.userId == '' || this.password == ''){
        alert("Please enter something");
    }
    else{
      this.loginservice.login(this.userId, this.password).subscribe(
        (response)=>{
          if(response==1){
            console.log(response);
            //check role 
            this.loginservice.getRole(this.userId).subscribe(
              (data)=>{
                console.log(data.role);
                if(data.role ==="admin"){
                  this.router.navigate(['admin']);
                }
                else{
                  alert("Login Success");
                  this.localservice.setItem("userId", this.userId);
                  this.router.navigateByUrl('/sidenav');

                }
              }
            )
          }
          if(response==2){
            alert("Password Invalid");
          }else{
          if(response==3){
            alert("InValid Credentials");
          }
        }
        }
      )
    }
  }
  signup(){
    this.loginservice.signup(this.userId, this.password,this.email,this.name).subscribe(
      (response)=>{
        console.log(response);
        
        if(response){
          this.localservice.setItem("userId",this.userId);
           this.router.navigate(['sidenav']);
           this.localservice.setItem("userId",this.userId);
        }
        else{
          alert("Account Not Created");
        }
      }
    )
}

  
}
