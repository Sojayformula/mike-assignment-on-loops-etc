import { HttpInterceptorFn } from '@angular/common/http';

export const timeOutInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
