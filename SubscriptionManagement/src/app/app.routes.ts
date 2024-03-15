import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'signup', component:SignupComponent}
];
