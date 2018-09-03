import { Component, OnInit, ViewChild } from '@angular/core';
import{Http,Response,Headers} from '@angular/http';
import {Router} from '@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl:'createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  constructor(private http:Http,private _router:Router) { }
  
  photoPreview=false;
  @ViewChild('userForm') public CreateUserForm: NgForm;
  onSubmit(value:any){
    console.log(value);
  }
  togglephotoPath(){
    this.photoPreview =! this.photoPreview;
  }
  employeeObj={};
 
  confirmstring:string="New Product has benn Added";
  isAdded:boolean=false;
  ngOnInit() {
  }
  getemployeeData=function(employee){
    this.employeeObj={
            id:employee.id,
            name: employee.fname,
            gender: employee.gender,
            contactPreference:employee.contactPreference,
            email: employee.cemail,
            phoneNumber:employee.phoneNumber,
            dateOfBirth:employee.dateofbirth,
            department:employee.department,
            isActive: employee.isActive,
            photoPath : employee.photopath,
    }
    this.http.post("http://localhost:3000/employee",this.employeeObj).subscribe(
      (res:Response)=>{
        console.log(res);
        this.isAdded=true;
        this._router.navigate(['list']);
      }
    
    )
  }
}
