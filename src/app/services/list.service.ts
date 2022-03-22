import { ToDoList } from './../model/ToDoList';
import { Item } from './../model/Item';
import { throwError, Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { localUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';

const url = `${localUrl}lists`;

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getItemListByListId(id:number): Observable<Item[]> {
    return this.http.get<Item[]>(`${url}/${id}/itemList`)
      .pipe(catchError(this.handleError));
  }

  public getListById(id:number):Observable<ToDoList>{
    return this.http.get<ToDoList>(`${url}/${id}`)
      .pipe(catchError(this.handleError));
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
