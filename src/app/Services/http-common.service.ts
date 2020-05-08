import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {

  constructor(public http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url).pipe(map(res => this.setPayload(res)))
      .pipe(catchError((err) => {
        return of(err);
      }));
  }

  post(url: string, data): Observable<any> {
    return this.http.post(url, data).pipe(map(this.setPayload))
      .pipe(catchError((error) => {
        return of(error);
      }));
  }

  delete(url: string, option?): Observable<any> {
    if (!!option === true) {
      return this.http.delete(url, option).pipe(map(response => response))
        .pipe(catchError((error) => {
          return of(error);
        }));
    } else {
      return this.http.delete(url).pipe(map(response => response))
        .pipe(catchError((error) => {
          return of(error);
        }));
    }

  }

  setPayload(retObj) {
    return retObj || {};
  }
}
