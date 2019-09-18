import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://127.0.0.1:8080/employee_portal/employee";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched employees')),
        catchError(this.handleError('getEmployees', []))
      );
  }

  addEmployee (employee): Observable<Employee> {
    return this.http.post<Employee>(apiUrl, employee, httpOptions).pipe(
      tap((employee: Employee) => console.log(`added employee w/ id=${employee.employee_id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

}






