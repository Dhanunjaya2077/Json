import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeserviceService} from '../employeeservice.service';
import {ActivatedRoute,Router} from "@angular/router";
import{Http,Response,Headers} from '@angular/http';
import {toPromise} from 'rxjs-compat/Operator/toPromise';

@Component({
  selector: 'app-employeelist',
  templateUrl: `employeelist.component.html`,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  private id:number;
  employees:Employee[];
  private header=new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http,private employeeservice:EmployeeserviceService,private _router:Router,private _activatedrout:ActivatedRoute) { }

  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe(employeesData=>this.employees=employeesData);
    this._activatedrout.paramMap.subscribe(params=>{
      this.id= +params.get('id');
      this.employeeservice.getEmployeeId(this.id);
    });

  }
  ViewEmployee(employeeId:number){
   this. _router.navigate(["/employees",employeeId]);
  }
  
  EditEmployee(employeeId:number){
    this._router.navigate(["/update",employeeId]);

  }
  deleteEmployee(id:number){
    if(confirm("Are you sure?")){
    const url= "http://localhost:3000/employee/"+(id);
    console.log(url);
    return this.http.delete(url,{headers: this.header})
    .toPromise()
    .then(()=>{
      this.employeeservice.getEmployees();
    })
    }
    
  }



}
