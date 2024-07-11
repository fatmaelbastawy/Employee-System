import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployees().subscribe(data => {
      this.employee = data;
    });
  }
}
