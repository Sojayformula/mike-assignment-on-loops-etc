import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httperrorhandlinginterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  

   // ERROR HANDLING
   return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        console.error('Network error. Check your connection.');
      } else if (error.status === 401) {
        console.error('Unauthorized. Please log in.');
      } else if (error.status === 403) {                 // Forbidden
        console.error('You do not have permission.');
      } else if (error.status === 404) {
        console.error('Requested resource was not found.');
      } else if (error.status >= 500) {
        console.error('Server error. Try again later.');
      }

      return throwError(() => error);
    })
  );
  
  return next(req);
};
