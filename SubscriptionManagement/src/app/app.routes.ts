import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpgradedplansComponent } from './upgradedplans/upgradedplans.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'upgradedplans', component:UpgradedplansComponent}
];
