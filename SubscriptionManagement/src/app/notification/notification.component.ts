import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
