import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { Pageservice } from '../service/pageservice';
import { inject } from '@angular/core';

export const logginInterceptor: HttpInterceptorFn = (req, next) => {

  //  const startTime = Date.now();

  // console.log(`[HTTP] ${req.method} ${req.url}`);

  // return next(req).pipe(
  //   catchError(error => {        // the cache here is a RxJs
  //     console.error(
  //       `[HTTP ERROR] ${req.method} ${req.url}`,
  //       error.status
  //     );

  //     return throwError(() => error);   // the throwError here is a RxJs
  //   }),
  //   finalize(() => {                // the finalize here is a RxJs
  //     const duration = Date.now() - startTime;

  //     console.log(
  //       `[HTTP COMPLETE] ${req.method} ${req.url} - ${duration}ms`
  //     );
  //   })
  // );

  // return next(req);



   const loggingService = inject(Pageservice);
  const startTime = Date.now();

  // Record that the request started
  loggingService.addLog({
    method: req.method,
    url: req.urlWithParams,
    status: 'Pending',
    time: new Date().toLocaleTimeString()
  });

  return next(req).pipe(
    tap(event => {         // tap rxjs
      if (event instanceof HttpResponse) {
        loggingService.addLog({
          method: req.method,
          url: req.urlWithParams,
          status: `Completed (${event.status})`,
          time: `${Date.now() - startTime} ms`
        });
      }
    }),
    catchError(error => {
      loggingService.addLog({
        method: req.method,
        url: req.urlWithParams,
        status: `Failed (${error.status || 'Network error'})`,
        time: `${Date.now() - startTime} ms`
      });

      return throwError(() => error);
    })
  );
};
