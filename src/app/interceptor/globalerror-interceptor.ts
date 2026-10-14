import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const globalerrorInterceptor: HttpInterceptorFn = (req, next) => {

   return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 0:
          console.error('Network error or server unavailable.');
          break;

        case 400:
          console.error('Bad request. Check the submitted data.');
          break;

        case 401:
          console.error('Unauthorized. Please sign in.');
          break;

        case 403:
          console.error('Forbidden. You do not have permission.');
          break;

        case 404:
          console.error('Requested resource was not found.');
          break;

        case 500:
          console.error('Internal server error.');
          break;

        default:
          console.error('Unexpected HTTP error:', error.status);
      }

      // Keep the error available to the calling service/component.
      return throwError(() => error);
    })
  );


};
