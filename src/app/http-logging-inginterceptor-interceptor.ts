import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpLoggingInginterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
    console.log('HTTP Request:', req.method, req.url);

  return next(req).pipe(
    tap(event => {  // TAP IS RXJS
      if (event.type === HttpEventType.Response) {
        console.log('HTTP Status:', event.status);
      }
    })
  );
  

};
