import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../Employee';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'salary', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  deletedEmployee: Employee | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteEmployee(id: any) {
    const employeeToDelete = this.dataSource.data.find(employee => employee._id === id);
    if (employeeToDelete) {
      this.deletedEmployee = employeeToDelete;
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(employee => employee._id !== id);
        this.snackBar.open('Employee deleted', 'Undo', {
          duration: 3000,
        }).onAction().subscribe(() => {
          this.undoDeleteEmployee();
        });
      });
    }
  }

  undoDeleteEmployee() {
    if (this.deletedEmployee) {
      this.employeeService.addEmployee(this.deletedEmployee).subscribe(() => {
        this.dataSource.data.push(this.deletedEmployee!);
        this.dataSource.paginator = this.paginator;
        this.deletedEmployee = null;
      });
    }
  }
}
