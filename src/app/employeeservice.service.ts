import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Employee} from './employee.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpErrorResponse} from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class EmployeeserviceService {
  e
  constructor(private _http:Http){

  }
  getEmployees():Observable<Employee[]> {
  return this._http.get("http://localhost:3000/employee")
   .map((response:Response) => <Employee[]>response.json());

  }
  getEmployeeId(id:number){
    const url="http://localhost:3000/employee/"+id;
    return this._http.get(url)
    .map((response:Response) =><Employee>response.json());

    }
  EditEmployeeId(id:number){
    const url="http://localhost:3000/employee/"+id;
    console.log(url);
    return this._http.get(url)
    .map((response:Response) =><Employee>response.json());

    }
}
