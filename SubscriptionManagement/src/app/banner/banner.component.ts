import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private router: Router) {
    
  }
  login(){
    console.log("Login");
    
    this.router.navigateByUrl("/login");
  }
  signup(){
    this.router.navigate(['signup']);
  }
}
