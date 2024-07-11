import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../Employee';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  name!:string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }


  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    if (this.name) {
      this.employeeService.getEmployeeByName(this.name).subscribe((data: Employee) => {
        this.employeeForm.setValue({
          name: data.name,
          
        });
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      if (this.name) {
        this.employeeService.updateEmployee(this.name, formData).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.employeeService.addEmployee(formData).subscribe(() => {
          this.router.navigate(['/']); 
        });
      }
    }
  }
}