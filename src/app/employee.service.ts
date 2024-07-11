import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './components/Employee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://task-dot-fe-task-428108.uc.r.appspot.com/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`).pipe(
      catchError(error => {
        console.error('Error fetching employees:', error);
        return throwError('Something went wrong while fetching employees.');
      })
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);
  }

  updateEmployee(name: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/employees/${employee._id}`, employee);
  }

  deleteEmployee(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${id}`);
  }

  getEmployeeByName(name: string): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${name}`;
    return this.http.get<Employee>(url);
  }
}
