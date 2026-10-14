import { HttpInterceptorFn } from '@angular/common/http';

export const cachInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
