import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { Pageservice } from '../service/pageservice';
import { columnFacetingFeature, columnFilteringFeature, createFilteredRowModel, createSortedRowModel, filterFn_includesString, rowSortingFeature, tableFeatures } from '@tanstack/angular-table';
import { BehaviorSubject, debounceTime, filter, map } from 'rxjs';


const feature = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel()
  
})




@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  staff: any[]=[]
  subject = new BehaviorSubject<number>(1000)

  constructor(){
    for(let i = 0; i < 5;){
  i++
 }


 for(let i = 0; i < this.data.length; i++){
  console.log(this.data[i].name)
  console.log(this.data[i].age)
  console.log(this.data[i].phone)
 }



 

 
  }




 employee = [
  { id: 1, name: "Luis", age: 23, salary: 4000, department: 'IT' },
  { id: 2, name: "John", age: 10, salary: 5000, department: 'hr' },
  { id: 3, name: "Yaw", age: 30, salary: 6000, department: 'Finance' },
  { id: 4, name: "Odoi", age: 40, salary: 8000, department: 'Finance' },
   { id: 5, name: "Kofi", age: 35, salary: 7000, department: 'Operations' }
];



  increase = signal(0)

   data = [
    {name: "Kofi", phone: "1234", age: 2},
    {name: "Kofi", phone: "1234", age: 2},
    {name: "Kofi", phone: "1234", age: 2}
 ]




filter = this.employee.filter(
  user => user.salary >= 5000
)






 

 

 

// this.data.update(user => user.filter(staff => (staff.id) => !==(id)))

// SIGNAL
// counters, search, filtering, dark mode, loading indicators, 
// notifications, pagination, shopping carts, dashboards, and more.



//  signal filter
// The filter() method takes each staff member, one at a time, and passes it to user.

// For example:

// First, user represents Ama.

// Next, user represents Kojo.

// Finally, user represents Yaw.

// The condition compares each user.id with the target id.

// Step 2: What happens after the comparison?

// If the target id is "2":

// user

	

// Comparison

	

// Result




// Ama ("1")

	

// "1" !== "2"

	

// true — keep Ama




// Kojo ("2")

	

// "2" !== "2"

	

// false — exclude Kojo




// Yaw ("3")

	

// "3" !== "2"

	

// true — keep Yaw

// Important: The comparison result (true or false) is passed back to filter(), not to user.

// If the result is true, filter() keeps that user in the new array.

// If the result is false, filter() leaves that user out of the new array.













 // if (!confirm('Are you sure you want to delete this staff member?')) {
  //   return;
  // }


// staff — the current array containing all staff members.

// .filter() — creates a new array containing only the items that pass a condition.

// user — represents each individual staff member in the array.

// user.id — the ID of the current staff member being checked.

// String(user.id) — converts that ID to a string.

// String(id) — converts the ID you want to delete to a string.

// !== — checks whether the two IDs are different.


// this.APIData is your Signal.

// .update() takes the current data and replaces it with a new value.

// staff represents the existing array.

// [...staff] copies all the items from the existing array into a new array.




// Page 1
// (1−1)×5=0

// Start at index 0 — the first staff member.

// Page 2
// (2−1)×5=5

// Start at index 5 — the sixth staff member.

// Page 3
// (3−1)×5=10

// Start at index 10 — the eleventh staff member.

// is a method that takes a portion of an array and returns it 
// as a new array without changing the original array.

// computed() automatically recalculates the total whenever the number 
// of staff members or the page size changes.



//   value represents the current value of the Signal.

// value + 1 adds one to that current value.

// The result becomes the Signal's new value.

// Math.ceil() rounds a number up to the next whole number when necessary.





 
  // addStaff(name: string){
  //   this.loading.set(true);
  //   this.errorMessage.set(true);
  //   console.log((name));

  //   if(!name){
  //     return
  //   }

  //   this.staffList.update(staff => [
  //     ...staff,

    // {
    //   id: staff.length
    //   ? Math.max(...staff.map(person => person.id)) + 1
    //   : 1,
    //    name: name
       
    // }
  //   ])
  //   this.newStaff.set('');
  //   this.loading.set(false)
  //   if(!name || name.length === 0){
  //   this.errorMessage.set(false)
  //   }
    
  // }



}
















//   // 1. Simple while loop
//   simpleWhile(): void {
//     const result: number[] = [];
//     let i = 1;

//     while (i <= 5) {
//       result.push(i);
//       i++;
//     }

//     this.show(result);
//   }

//   // 2. Counter-controlled while loop
//   counterWhile(): void {
//     const result: number[] = [];
//     let count = 1;

//     while (count <= 10) {
//       result.push(count);
//       count++;
//     }

//     this.show(result);
//   }

//   // 3. Condition-controlled while loop
//   // conditionWhile(): void {
//   //   const result: number[] = [];
//   //   let temperature = 100;

//   //   while (temperature > 50) {
//   //     result.push(temperature);
//   //     temperature -= 10;
//   //   }

//   //   this.show(result);
//   // }

//   // 4. Sentinel-controlled while loop
//   sentinelWhile(): void {
//     const numbers = [10, 20, 30, -1, 40];
//     const result: number[] = [];
//     let i = 0;

//     while (i < numbers.length && numbers[i] !== -1) {
//       result.push(numbers[i]);
//       i++;
//     }

//     this.show(result);
//   }

//   // 5. Flag-controlled while loop
//   flagWhile(): void {
//     const result: string[] = [];
//     let running = true;

//     while (running) {
//       result.push('Task running');
//       running = false;
//     }

//     this.show(result);
//   }

//   // 6. Nested while loop
//   nestedWhile(): void {
//     const result: string[] = [];
//     let i = 1;

//     while (i <= 3) {
//       let j = 1;

//       while (j <= 2) {
//         result.push(`${i}, ${j}`);
//         j++;
//       }

//       i++;
//     }

//     this.show(result);
//   }

//   // 7. Multiple conditions
//   multipleConditionsWhile(): void {
//     const result: string[] = [];
//     let i = 1;
//     let j = 10;

//     while (i <= 5 && j >= 6) {
//       result.push(`${i}, ${j}`);
//       i++;
//       j--;
//     }

//     this.show(result);
//   }

//   // 8. break
//   breakWhile(): void {
//     const result: number[] = [];
//     let i = 1;

//     while (i <= 10) {
//       if (i === 5) break;
//       result.push(i);
//       i++;
//     }

//     this.show(result);
//   }

//   // 9. continue
//   continueWhile(): void {
//     const result: number[] = [];
//     let i = 0;

//     while (i < 5) {
//       i++;

//       if (i === 3) continue;

//       result.push(i);
//     }

//     this.show(result);
//   }

//   // 10. if-else inside while
//   ifElseWhile(): void {
//     const result: string[] = [];
//     let i = 1;

//     while (i <= 5) {
//       result.push(
//         `${i}: ${i % 2 === 0 ? 'Even' : 'Odd'}`
//       );
//       i++;
//     }

//     this.show(result);
//   }

//   // 11. Decrementing while
//   decrementWhile(): void {
//     const result: number[] = [];
//     let i = 5;

//     while (i >= 1) {
//       result.push(i);
//       i--;
//     }

//     this.show(result);
//   }

//   // 12. Array traversal
//   arrayWhile(): void {
//     const numbers = [10, 20, 30, 40, 50];
//     const result: number[] = [];
//     let i = 0;

//     while (i < numbers.length) {
//       result.push(numbers[i]);
//       i++;
//     }

//     this.show(result);
//   }

//   // 13. Searching an array
//   searchWhile(): void {
//     const numbers = [4, 8, 12, 16, 20];
//     const target = 12;
//     let i = 0;

//     while (i < numbers.length && numbers[i] !== target) {
//       i++;
//     }

//     this.show([
//       i < numbers.length
//         ? `Found ${target} at index ${i}`
//         : 'Not found'
//     ]);
//   }

//   // 14. Input validation (simulated values)
//   validationWhile(): void {
//     const attempts = [-5, 150, 25];
//     const result: number[] = [];
//     let i = 0;
//     let age = attempts[i];

//     while (age < 18 || age > 100) {
//       result.push(age);
//       i++;

//       if (i >= attempts.length) break;

//       age = attempts[i];
//     }

//     result.push(age);
//     result.push(1000); // marker not needed in real validation
//     this.show(result.slice(0, -1).map(
//       n => n >= 18 && n <= 100 ? `Valid age: ${n}` : `Invalid age: ${n}`
//     ));
//   }

//   // 15. Simple do-while
//   simpleDoWhile(): void {
//     const result: number[] = [];
//     let i = 1;

//     do {
//       result.push(i);
//       i++;
//     } while (i <= 5);

//     this.show(result);
//   }

//   // 16. do-while executes at least once
//   onceDoWhile(): void {
//     const result: number[] = [];
//     let i = 10;

//     do {
//       result.push(i);
//     } while (i < 5);

//     this.show(result);
//   }

//   // 17. Counter-controlled do-while
//   counterDoWhile(): void {
//     const result: number[] = [];
//     let i = 1;

//     do {
//       result.push(i);
//       i++;
//     } while (i <= 10);

//     this.show(result);
//   }

//   // 18. Sentinel-controlled do-while
//   sentinelDoWhile(): void {
//     const numbers = [10, 20, 30, -1, 40];
//     const result: number[] = [];
//     let i = 0;
//     let number: number;

//     do {
//       number = numbers[i];
//       i++;

//       if (number !== -1) {
//         result.push(number);
//       }
//     } while (number !== -1 && i < numbers.length);

//     this.show(result);
//   }

//   // 19. Nested do-while
//   nestedDoWhile(): void {
//     const result: string[] = [];
//     let i = 1;

//     do {
//       let j = 1;

//       do {
//         result.push(`${i}, ${j}`);
//         j++;
//       } while (j <= 2);

//       i++;
//     } while (i <= 3);

//     this.show(result);
//   }

//   // 20. do-while with break
//   breakDoWhile(): void {
//     const result: number[] = [];
//     let i = 1;

//     do {
//       if (i === 4) break;

//       result.push(i);
//       i++;
//     } while (i <= 10);

//     this.show(result);
//   }

//   // 21. do-while with continue
//   continueDoWhile(): void {
//     const result: number[] = [];
//     let i = 0;

//     do {
//       i++;

//       if (i === 3) continue;

//       result.push(i);
//     } while (i < 5);

//     this.show(result);
//   }

//   // 22. Decrementing do-while
//   decrementDoWhile(): void {
//     const result: number[] = [];
//     let i = 5;

//     do {
//       result.push(i);
//       i--;
//     } while (i >= 1);

//     this.show(result);
//   }

//   // 23. Menu-driven do-while (simulated choices)
//   // menuDoWhile(): void {
//   //   const choices = [1, 2, 0];
//   //   const result: string[] = [];
//   //   let i = 0;
//   //   let choice: number;

    
//   //   do {
//   //     choice = choices[i++];

//   //     if (choice === 1) result.push('Start');
//   //     else if (choice === 2) result.push('Settings');
//   //     else if (choice === 0) result.push('Exit');

//   //   } while (choice !== 0 && i < choices.length);

//   //   this.show(result);
//   // }
  



//   // show(lines: string[]): void {
//   //   this.output = lines;
//   // }

 


//   // choices = [1, 2, 0] Provides three sample choices.
//   // do { ... } Executes the menu logic at least once.
//   // choice = choices[i++] Gets the current choice, then increases i by one.





//   // 24. Multiple counters in do-while
//   multipleCountersDoWhile(): void {
//     const result: string[] = [];
//     let i = 1;
//     let j = 10;

//     do {
//       result.push(`${i}, ${j}`);
//       i++;
//       j--;
//     } while (i <= 5);

//     this.show(result);
//   }

//   clearOutput(): void {
//     this.output = [];
//   }



// }









// //    product = [
// //   {name: 'Laptop', Price: 5000, quantity: 4000},
// //   {name: 'Phone', Price: 3000, quantity: 5000},
// //   {name: 'Mouse', Price: 2000, quantity: 2000}
// //  ]
