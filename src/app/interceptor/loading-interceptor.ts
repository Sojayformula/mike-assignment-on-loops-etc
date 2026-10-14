import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Pageservice, User } from '../service/pageservice';
import { inject, signal } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  //  console.log('Loading started');

  // return next(req).pipe(
  //   finalize(() => {
  //     console.log('Loading finished');
  //   })
  // );


  const loadingService = inject(Pageservice);

  loadingService.startLoading();

  return next(req).pipe(
    finalize(() => loadingService.stopLoading())
  );



};
