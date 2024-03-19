import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpgradedplansComponent } from './upgradedplans/upgradedplans.component';
import { AllplanComponent } from './allplan/allplan.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminComponent } from './admin/admin.component';



export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    // {path:'dashboard', component:DashboardComponent},
    // {path:'upgradedplans', component:UpgradedplansComponent},
    //{path:'allplan', component:AllplanComponent},
    // {path:'addplan', component:AddPlanComponent},
    {path:'sidenav', component:SideNavComponent,
    children:[
        {path:'dashboard', component:DashboardComponent},
        {path:'allplan', component:AllplanComponent},
        {path:'addplan', component:AddPlanComponent},
        {path:'upgradedplans', component:UpgradedplansComponent}
    ]
    },
    {path:'admin',component:AdminComponent}
];
