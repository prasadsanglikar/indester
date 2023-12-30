import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './outerpage/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProjectListingComponent } from './main/project-listing/project-listing.component';
import { CreateComponent } from './main/create/create.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SearchComponent } from './main/search/search.component';

import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { CardComponent } from './main/card/card.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjectListingComponent,
    CreateComponent,
    NavbarComponent,
    SearchComponent,
    CardComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
