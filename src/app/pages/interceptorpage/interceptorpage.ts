import { Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Pageservice, User } from '../../service/pageservice';

@Component({
  selector: 'app-interceptorpage',
  imports: [],
  templateUrl: './interceptorpage.html',
  styleUrl: './interceptorpage.scss',
})
export class Interceptorpage {

 private userService = inject(Pageservice);
  private loadingService = inject(Pageservice);
  

  users = signal<User[]>([]);
  errorMessage = signal('');

  loading = this.loadingService.isLoading;
  logs = this.userService.logs;



  loadUsers(): void {
    this.errorMessage.set('');
    this.users.set([]);

    this.userService.getuser().subscribe({
      next: (res) => {
        this.users.set(res);
      },
      error: (error) => {
        this.errorMessage.set(
          error.status === 0
            ? 'Network error. Check your connection.'
            : `Failed to load users. Error: ${error.status}`
        );
      }
    });
  }



  
  clearLogs(): void {
    this.userService.clearLogs();
  }

   
  

 

  loadUsers2(): void {
    this.errorMessage.set('');
    this.users.set([]);

    this.userService.getuser().subscribe({
      next: (res) => {
        this.users.set(res);
      },
      error: (error) => {
        this.errorMessage.set(
          error.status === 0
            ? 'Network error. Check your connection.'
            : `Failed to load users. Error: ${error.status}`
        );
      }
    });
  }

 

}
