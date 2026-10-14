import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';
import { AsyncPipe, CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behavioralsubject',
  imports: [AsyncPipe, CommonModule, FormsModule],
  templateUrl: './behavioralsubject.html',
  styleUrl: './behavioralsubject.scss',
})
export class Behavioralsubject implements OnInit{

 count = new BehaviorSubject<number>(0);
 searchSubject$ = new Subject<string>();


staff = new BehaviorSubject([
  { id: 1, name: 'Luis', salary: 4000 },
  { id: 2, name: 'John', salary: 5000 },
  { id: 3, name: 'Yaw', salary: 6000 }
]);



 constructor(){
  this.searchSubject$.pipe(debounceTime(500)).subscribe(value => {
      console.log('SEARCH:', value);
    });
}

search() {
  this.searchSubject$.next('Sowah');
 }


  ngOnInit(): void {
   this.subject2()
   this.search()
 }



 name$ = new BehaviorSubject<string>('John');

subject1() {
  this.name$.subscribe(value => {
    console.log('subject1:', value);
  });
}

subject2(){
  this.name$.subscribe(value => {
    console.log('subject2:', value);
  });

  this.name$.next('Kofi');
}







deleteStaff(id: number) {
  const updatedStaff = this.staff.value.filter(
    user => user.id !== id
  );

  this.staff.next(updatedStaff);
}




  // Display the current staff
showStaff() {
  console.log("Behavior Sub",this.staff.value);
}


  // COUNT
increase() {
  this.count.next(this.count.value + 1);
}

}


