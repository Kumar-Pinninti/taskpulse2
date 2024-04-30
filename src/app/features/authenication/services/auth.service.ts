import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mainURL = 'http://example.com'

  private loginUrl = `${this.mainURL}/api/login`;
  private registerUrl = `${this.mainURL}/api/register`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { email, password })
      .pipe(
        catchError(this.handleError)
      );
  }

  register(email: string, password: string): Observable<boolean> {
    // return this.http.post<any>(this.registerUrl, { email, password })
    //   .pipe(
    //     catchError(this.handleError)
    //   );

    return of(true).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return of(false);
      })
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return Observable.throw(error);
  }
}
