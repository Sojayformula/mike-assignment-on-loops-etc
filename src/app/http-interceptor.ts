import { HttpErrorResponse, HttpEventType, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const hTTPInterceptor: HttpInterceptorFn = (req, next) => {

  // AUTHENTICATION INTERCEPTOR
   const token = localStorage.getItem('token');

    const reqClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });


  return next(reqClone);
};
