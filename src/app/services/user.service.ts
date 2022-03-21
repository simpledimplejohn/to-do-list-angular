import { ToDoList } from './../model/ToDoList';
import { User } from './../model/user';
import { localUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const url = `${localUrl}users`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public addUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${url}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getWithEmailAndPassword(user: string) : Observable<User> {
    return this.http.post<User>(`${url}/find`, user, this.httpOptions)
      .pipe(catchError(this.handleError))
  }



  // standard HTTP error handling method
  private handleError(httpError: HttpErrorResponse) {
    // first get the error message
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message);
    } else {
      console.error(`
        **Backend returned code ${httpError.status},
        body was: ${httpError.error}
        `);
    }
    // throwError is an Observable form RxJS
    // then return the error
    return throwError(() => new Error('something bad happened'));
  }
}
