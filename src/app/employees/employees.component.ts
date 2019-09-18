import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['employee_id', 'first_name', 'last_name', 'gender', 'date_of_birth', 'department'];
  data: Employee[] = [];
  //data: Employee[] = new MatTableDataSource<Employee>(this.employee);
  isLoadingResults = true;
  columnObjects = [
         { columnId: 'employee_id', propertyName: 'employee_id' },
         { columnId: 'first_name', propertyName: 'first_name' },
         { columnId: 'last_name', propertyName: 'last_name' },
         { columnId: 'gender', propertyName: 'gender' },
         { columnId: 'date_of_birth', propertyName: 'date_of_birth' },
         { columnId: 'department', propertyName: 'department' }
     ];

  columnIds = this.columnObjects.map(c => c.columnId);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getEmployees()
      .subscribe(res => {
        this.data = res;
        //this.data = new MatTableDataSource<Employee>(res)
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
