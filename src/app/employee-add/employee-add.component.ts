import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;
  employee_id:number=null;
  first_name:string='';
  last_name:string='';
  gender:string='';
  date_of_birth:Date=null;
  department:string='';
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      'employee_id' : [null, Validators.required],
      'first_name' : [null, Validators.required],
      'last_name' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'date_of_birth' : [null, Validators.required],
      'department' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addEmployee(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
