import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../components/global-constants';

const url = `${GlobalConstants.apiUrl}items`

@Injectable({
  providedIn: 'root'
})
export class ItemService {



  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
