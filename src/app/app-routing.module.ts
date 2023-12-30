import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './outerpage/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProjectListingComponent } from './main/project-listing/project-listing.component';
import { CreateComponent } from './main/create/create.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'projectlist',component:ProjectListingComponent},
  {path:'createlist',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
