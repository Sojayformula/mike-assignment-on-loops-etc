import { CanActivateFn, Router } from '@angular/router';
import { Role } from './service/role';
import { inject } from '@angular/core';
import { Pageservice } from './service/pageservice';
import { Auth } from './service/auth';

export const routeGuard: CanActivateFn = (route, state) => {

  const roleService = inject(Role)
  const router = inject(Router)

  const requiredRole = route.data["role"]


  if(roleService.hasRole(requiredRole)){
    return true
  }


  // const token = localStorage.getItem("token")
  //   if(token){
  //     return true
  // }





  // CAnactivate
   const authService = inject(Auth);
 
  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);


 if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  if (authService.getRole() !== 'admin') {
    return router.createUrlTree(['/unauthorized']);
  }

  return true;



};
