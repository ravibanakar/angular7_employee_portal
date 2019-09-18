import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [{
                            path: 'employees',
                            component: EmployeesComponent,
                            data: { title: 'List of Employees' }
                          },
                          {
                            path: 'employee-add',
                            component: EmployeeAddComponent,
                            data: { title: 'Add Employee' }
                          },
                          {
                            path: '',
                            redirectTo: '/employees',
                            pathMatch: 'full'
                          }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
