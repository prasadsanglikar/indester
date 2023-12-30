import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/appServices/employee.service';
import { Employee } from 'src/app/appModels/employee.models';
import { DateTime } from '@syncfusion/ej2-angular-charts';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  

  reason: any[] = [{ id: 1, name: 'Business' }, { id: 2, name: 'Dealership' }, { id: 3, name: 'Dealership' }, { id: 4, name: 'Transport' }]
  Type: any[] = [{ id: 1, name: 'Internal' }, { id: 2, name: 'External' }, { id: 3, name: 'Vendor' }]
  
  Division: any[] = [{ id: 1, name: 'Compressor' }, { id: 2, name: 'Filters' }, { id: 3, name: 'Pumps' }, { id: 4, name: 'Glass' }, { id: 5, name: 'Water Heater' }]
  Category: any[] = [{ id: 1, name: 'Quality A' }, { id: 2, name: 'Quality B' }, { id: 3, name: 'Quality C' }, { id: 4, name: 'Quality D' }]
  Priority:any[]=[{ id: 1, name: 'High' }, { id: 2, name: 'Low' }, { id: 3, name: 'Medium' }]
  Department:any[]=[{ id: 1, name: 'Strategy' }, { id: 2, name: 'Finance' }, { id: 3, name: 'Quality' },{ id: 4, name: 'Maintenance' }, { id: 5, name: 'Stores' }]
  Location:any[]=[{ id: 1, name: 'Pune' }, { id: 2, name: 'Mumbai' }, { id: 3, name: 'Delhi' }]
  createlistform!: FormGroup;

  
  title = 'Create Project';
  constructor(private fb: FormBuilder, private empServices: EmployeeService,private _router:Router,private http: HttpClient) { }
  ngOnInit(): void {
    this.createlistform = this.fb.group({
      projecttheme: ['', Validators.required]
    })
  }

  // onSubmit() {
  //   if (this.createlistform.valid) {
  //     // console.log(this.createlistform.value)
  //     this.empServices.addEmployee(this.createlistform.value).subscribe({
  //     next:()=>{
  //       alert('Record added successfully')
  //       this._router.navigate(['projectlist'])
  //     },
  //   error:()=>console.log('not fetched')
  //     })
  //     // send the obj to database
  //   } else {
  //     // throw the error using toaster and this with requires files
  //     this.validateAllFormFileds(this.createlistform);
  //     alert("Your form is invalid")
  //   }
  }

  // private validateAllFormFileds(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsDirty({ onlySelf: true })
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFileds(control)
  //     }
  //   })
  // }


