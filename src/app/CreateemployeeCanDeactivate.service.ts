import { CanDeactivate } from "../../node_modules/@angular/router";
import { CreateemployeeComponent } from "./createemployee/createemployee.component";
import { Component, Injectable } from "../../node_modules/@angular/core";
@Injectable()
export class CreateemployeeCanDeactivateService implements CanDeactivate<CreateemployeeComponent>{
    canDeactivate(component: CreateemployeeComponent): boolean{
        if(component.CreateUserForm.dirty){
            return confirm('Are sure want to do discard your changes?')
        }
        return true;
    }  
}