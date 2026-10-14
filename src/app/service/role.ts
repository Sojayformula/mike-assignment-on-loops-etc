import { Injectable } from '@angular/core';

export type UserRole = "employee" | "hr" | "admin"

@Injectable({
  providedIn: 'root',
})



export class Role {

  private currentRole: UserRole = "hr"

  setRole(role: UserRole){
    return this.currentRole = role
  }

  hasRole(roles: UserRole | UserRole[]){
    if(this.currentRole === "admin"){
      return true
    }

    if(Array.isArray(roles)){
      return roles.includes(this.currentRole)
    }
 
    return this.currentRole = roles
  }
  
}
