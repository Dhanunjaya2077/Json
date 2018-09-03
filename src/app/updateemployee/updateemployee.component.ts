import { Component, OnInit, Input } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from '../employee.model';
import{Http,Response,Headers} from '@angular/http';
import {toPromise} from 'rxjs-compat/Operator/toPromise';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  private _id:number;
  employee: Employee;
  employeeObj:object={};
  private header=new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http,private employeeservice: EmployeeserviceService, private _activatedrout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._activatedrout.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.getEmployee(this._id);
    });

  }
  private getEmployee(id: number) {
      if(id===0){
        this.employee={
          id: null,
          name: null,
          gender:null,
          email:'',
          phoneNumber: null,
          contactPreference:null,
          dateOfBirth:null,
          department:'select',
          isActive:null,
          photoPath:null

        }
      }
      else{
        this.employeeservice.EditEmployeeId(this._id).subscribe(
          employeeData=>this.employee=employeeData);
      }

  }
   UpdateemployeeData=function(employee){
     this.employeeObj={
             id:employee.id,
             name: employee.name,
             gender: employee.gender,
             contactPreference:employee.contactPreference,
             email: employee.email,
             phoneNumber:employee.phoneNumber,
             dateOfBirth:employee.dateofbirth,
             department:employee.department,
             isActive: employee.isActive,
             photoPath : employee.photopath,
     }
    const url= "http://localhost:3000/employee/"+(this._id);
    console.log(url);
    this.http.put(url, this.employeeObj,{headers: this.header})
    this.router.navigate(['/list']);
   }
}
