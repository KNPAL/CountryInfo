import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {


  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    request = request.clone({ headers: request.headers.set('x-rapidapi-host', 'restcountries-v1.p.rapidapi.com') });
    request = request.clone({ headers: request.headers.set('x-rapidapi-key', 'dd98a33b1emsh08461f409ffe4dfp19abd5jsn5cd205c791dd') });
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
    return next
      .handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
          (error: HttpErrorResponse) => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms.`;
          console.log(msg);
        })

      );
  }
}
