import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../appModels/employee.models';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmployee(value: any) {
    throw new Error('Method not implemented.');
  }

  url=' http://localhost:8484/employee'
  constructor(private _http:HttpClient) { }

  
  getEmployeeList(){
    return this._http.get(this.url)
  }
}
