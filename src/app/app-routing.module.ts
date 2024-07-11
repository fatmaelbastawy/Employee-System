import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
