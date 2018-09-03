import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {EmployeeserviceService} from './employeeservice.service';
import {EmployeedetailsComponent} from './employee/employeedetails.component';
import {CreateemployeeComponent} from './createemployee/createemployee.component';
import {CreateemployeeCanDeactivateService} from './CreateemployeeCanDeactivate.service';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const appRoutes: Routes = [
  { path: 'list', component: EmployeelistComponent },
  { path: 'employees/:id', component:EmployeedetailsComponent},
  { 
    path: 'create', component: CreateemployeeComponent,
    canDeactivate:[CreateemployeeCanDeactivateService]
  },
  { path: 'update/:id', component: UpdateemployeeComponent,},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateemployeeComponent,
    EmployeedetailsComponent,
    UpdateemployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [EmployeeserviceService,CreateemployeeCanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
