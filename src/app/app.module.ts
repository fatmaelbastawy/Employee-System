import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Employee } from './components/Employee';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './http.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
