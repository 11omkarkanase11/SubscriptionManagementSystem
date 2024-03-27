import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../local.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule, CommonModule,MatButtonModule,
    MatIconModule, MatCardModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit  {
  notification1: string[] =this.service.notifications;

  constructor(private service: LocalService){}
  
ngOnInit(): void {

  
}
clear(){
  this.notification1=[];
  this.service.clearNotification();
}

 
  

  

  

  
}
