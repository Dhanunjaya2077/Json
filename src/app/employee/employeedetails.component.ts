import { Component, OnInit,Input} from '@angular/core';
import {EmployeeserviceService} from '../employeeservice.service';
import {ActivatedRoute,Router} from "@angular/router";
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  private _id:number;

  @Input() employee:Employee
  constructor(private employeeservice:EmployeeserviceService,private _activatedrout:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this._activatedrout.paramMap.subscribe(params=>{
      this._id= +params.get('id');
      this.employeeservice.getEmployeeId(this._id).subscribe(
        employeesData=>this.employee=employeesData);
    });
    
  }
  ViewNext(){
    if(this._id<10)
     this._id=this._id + 1;
     else{
       this._id=1;
     }   
    this.router.navigate(["/employees",this._id]);

  }
  

}
