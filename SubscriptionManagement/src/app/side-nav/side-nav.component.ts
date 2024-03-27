import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LocalService } from '../local.service';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule, DashboardComponent,
    MatTooltipModule, MatBadgeModule
  ]
})
export class SideNavComponent implements OnInit{
  count =0;
  clickEventSubscription : Subscription;
  constructor(private router :Router, private localservice : LocalService, private snackBar :MatSnackBar, private notifies : NotificationComponent){
   this.clickEventSubscription=this.localservice.getClicked().subscribe(
    (data)=>{
      this.renderSidenav();
    }
   )
  }
  ngOnInit(): void {
    this.router.navigate(['sidenav/dashboard']);
    this.renderSidenav();  
  }
  renderSidenav(){
    
    this.count =this.localservice.count; 
  }
  
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    logout(){
      
      this.router.navigate(['']);
     
    
      this.localservice.clear();
      this.localservice.clearNotification();
      
    }
    isMenuOpen = false; // Flag for menu visibility

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Implement your menu logic here (e.g., open/close a sidenav)
    }
   
   
    notify(){
      this.count =this.localservice.count;
       this.router.navigate(['/sidenav/notification'])
    }
}
