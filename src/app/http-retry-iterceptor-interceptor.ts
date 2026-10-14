import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retry, throwError, timer } from 'rxjs';

export const httpRetryIterceptorInterceptor: HttpInterceptorFn = (req, next) => {


   return next(req).pipe(
    retry({
      count: 2,
      delay: (error: HttpErrorResponse, retryCount: number) => {
        if (error.status === 0 || error.status >= 500) {
          return timer(1000 * retryCount);
        }

        return throwError(() => error);
      }
    })
  );
  
  return next(req);
};
