import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // AUTH GUARD

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }


  // CANACTIVATECHILD
   getRole(): string | null {
    return localStorage.getItem('role');
  }


  // CanDeactivate
  
}
