import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const httpRequestTimingIterceptorInterceptor: HttpInterceptorFn = (req, next) =>{

   const startTime = Date.now();

  return next(req).pipe(
    finalize(() => {
      const duration = Date.now() - startTime;
      console.log(`${req.url} completed in ${duration} ms`);
    })
  );
  
  return next(req);
};
