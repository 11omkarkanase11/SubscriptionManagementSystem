import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {
    
  }
  serviceName=''
  planStartDate= Date;
  remainingDuration=0;
  planCost=0;
}
