import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

   const token = localStorage.getItem('token');

  console.log('Out going HTTP request', req)

  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(reqClone);
};
