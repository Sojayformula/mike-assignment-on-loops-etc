import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { environment } from '../environment';


export interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  username: string;
}

 export interface RequestLog {
  method: string;
  url: string;
  status: string;
  time: string;
}

@Injectable({
  providedIn: 'root',
})
export class Pageservice {

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  constructor(private http: HttpClient){}

  // TANSTACK
//   getUsers2(page: number, limit: number, search: string) {
//   return firstValueFrom(this.http.get<any>(environment.baseURL, {
//       params: {
//         page: String(page),
//         limit: String(limit),
//         search
//       }
//     })
//   );
// }


getUsers2(
  page: number,
  limit: number,
  search: string
): Promise<{ rows: User[]; total: number }> {

  return firstValueFrom(
    this.http.get<User[]>(environment.baseURL)
  ).then(users => {

    // Filter the users
    const filteredUsers = users.filter(user => {
      const fullName =
        `${user.fname ?? ''} ${user.lname ?? ''}`;

      const searchableText =
        `${fullName} ${user.email ?? ''} ${user.username ?? ''}`
          .toLowerCase();

      return searchableText.includes(search.toLowerCase());
    });

    // Calculate the total matching users
    const total = filteredUsers.length;

    // Get the users for the requested page
    const start = (page - 1) * limit;
    const rows = filteredUsers.slice(start, start + limit);

    console.log('Filtered users:', filteredUsers);
    console.log('Current page:', rows);

    return { rows, total };
  });
}



  createUser(user: User): Promise<User> {
  return firstValueFrom( this.http.post<User>(environment.baseURL, user)
  );
}

deleteUserTan(id: number): Promise<void> {
  return firstValueFrom(this.http.delete<void>(`${environment.baseURL}/${id}`)
  );
}



// ORDINARY
 getuser():Observable<any>{
    return this.http.get(`${environment.baseURL}`)
  }

  addUser(payload: any):Observable<any>{
    return this.http.post(`${environment.baseURL}`, payload)
  }


editUser(id: string, payload: any): Observable<any> {
  return this.http.put(`${environment.baseURL}/${id}`,payload);
}

deleteUser(id: string): Observable<any> {
  return this.http.delete(`${environment.baseURL}/${id}`);
}

createStaff(payload: any): Observable<any> {
  return this.http.post(`${environment.baseURL}`, payload);
  
}



// BEHAVIOR SUBJECT
private staffSubject = new BehaviorSubject<any[]>([])

staff = this.staffSubject.asObservable()

loadStaff(){
  this.http.get<any[]>(`${environment.baseURL}`).subscribe(data =>{
    this.staffSubject.next(data)
  })
}



// interceptor loader
requestCount = signal(0);

  isLoading = this.requestCount.asReadonly();

  startLoading(){
    this.requestCount.update(count => count + 1);
  }

  stopLoading(){
    this.requestCount.update(count => Math.max(0, count - 1));
  }



  // LOGGING
  private logsSignal = signal<RequestLog[]>([]);

  logs = this.logsSignal.asReadonly();

  addLog(log: RequestLog){
    this.logsSignal.update(logs => [log, ...logs]);
  }

  clearLogs(): void {
    this.logsSignal.set([]);
  }

}



