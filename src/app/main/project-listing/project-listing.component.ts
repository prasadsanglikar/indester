import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/appServices/employee.service';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit{

  Projectlist: any[] = [

    { Name: 'Line Filter', date: 'Jun-21,2020 to Jan-01,2021', Reason: 'Bussiness', Type: 'Internal', Division: 'Compressor', Category: 'Quality A', Priority: 'High', Dept: 'Straategy', Locatoin: 'Pune', status: 'Running', },
    { Name: 'Sticker Management', date: 'Jun-01,2020 to Jan-31,2021', Reason: 'Dealership', Type: 'Exnternal', Division: 'Filters', Category: 'Quality B', Priority: 'Low', Dept: 'Straategy', Locatoin: 'Delhi', status: 'Running', },
    { Name: 'Pumps Connector', date: 'Feb-01,2020 to July-31,2021', Reason: 'Transport', Type: 'Internal', Division: 'Compressor', Category: 'Quality C', Priority: 'Medium', Dept: 'Quality', Locatoin: 'Mumbai', status: 'Registered' },
    { Name: 'Wall Reflector', date: 'Mar-05,2021 to Dec-31,2021', Reason: 'Business', Type: 'Vendor', Division: 'Pumps', Category: 'Quality A', Priority: 'High', Dept: 'Maintenance', Locatoin: 'Pune', status: 'Cancelled' },
    { Name: 'Tank Filter', date: 'Jan-01,2020 to Nov-20,2021', Reason: 'Business', Type: 'External', Division: 'Glass', Category: 'Quality A', Priority: 'High', Dept: 'Stores', Locatoin: 'Mumbai', status: 'Registered' },
    { Name: 'Water Heater', date: 'July-21,2020 to Nov-20,2022', Reason: 'Dealership', Type: 'Vendor', Division: 'Compressor', Category: 'Quality D', Priority: 'Low', Dept: 'Finance', Locatoin: 'Pune', status: 'Cancelled' },
    { Name: 'Large Mixer', date: 'Feb-01,2020 to Oct-20,2021', Reason: 'Transport', Type: 'External', Division: 'Water Heater', Category: 'Quality A', Priority: 'Low', Dept: 'Stores', Locatoin: 'Delhi', status: 'Closed' },
  ]

constructor(private emp:EmployeeService){}
  ngOnInit(): void {
this.getEmployeeS()
  }
getEmployeeS(){
  this.emp.getEmployeeList().subscribe(res=>{
    console.log(res);
  })
}

  ShowMe: boolean = false
  func() {
    this.ShowMe=!this.ShowMe;
  }
  close() {
    this.ShowMe=!this.ShowMe;
  }

}
