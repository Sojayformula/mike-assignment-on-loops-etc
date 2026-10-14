import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Pageservice, User } from '../../service/pageservice';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { debounce, debounceTime, filter, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filters',
  imports: [AsyncPipe],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters implements OnInit{

  staff: any[] = []
  staffData: any[] = []
  salaries: number []=[]
  subject: any[]=[] 

  private pageService = inject(Pageservice);

   ngOnInit(): void {
    this.search()
    this.showLog()
    
    //  this.getStaff()
    //  this.another()
    //  console.log("Age under 30",this.filter3);

    // const result = this.employee.filter(
//     user => user.name === value
//   );

   }

 employee = [
  { id: 1, name: "Luis", age: 23, salary: 4000, department: 'IT' },
  { id: 2, name: "John", age: 10, salary: 5000, department: 'hr' },
  { id: 3, name: "Yaw", age: 30, salary: 6000, department: 'Finance' },
  { id: 4, name: "Odoi", age: 40, salary: 8000, department: 'Finance' },
   { id: 5, name: "Kofi", age: 35, salary: 7000, department: 'Operations' }
];


employee2 = signal([
  { id: 1, name: "Luis", age: 23, salary: 4000, department: 'IT' },
  { id: 2, name: "John", age: 10, salary: 5000, department: 'hr' },
  { id: 3, name: "Yaw", age: 30, salary: 6000, department: 'Finance' },
  { id: 4, name: "Odoi", age: 40, salary: 8000, department: 'Finance' },
  { id: 5, name: "Kofi", age: 35, salary: 7000, department: 'Operations' }
]);

third = signal<number>(0)


subject$ = new Subject<string>()
searchTerm = 'Ama'


// constructor(){
//   this.subject$.pipe(debounceTime(500)).subscribe((value: string) => {
//   this.seachFunction(value)
// } )
// }


seachFunction(value: string) {
  const result = this.employee.filter(
    user => user.name === value
  );

  console.log('SEARCH:', result);
}


search(){
  this.seachFunction('John')
}

giveToBehavior(){
  this.subject$.next(this.searchTerm)
}





filter1(){
  const filter3 = this.employee2.update(list => 
    list.map(user =>
   user.id === 2
      ? {...user, age: 50}
      : user
    )
    
  )
}


filter5(){
  const filter1 = this.employee.map( user =>({
    name: user.name,
    salary: user.salary
  })
     
  )
  console.log("TESTING", filter1)
  return filter1
}








showLog(){
  this.filter5()
  // this.changeSalary()
}
















behavior = new BehaviorSubject([
   { id: 1, name: "Luis", age: 23, salary: 4000, },
  { id: 2, name: "John", age: 10, salary: 5000,},
  { id: 3, name: "Yaw", age: 30, salary: 6000,},
])

  product = [
  {name: 'Laptop', Price: 5000, quantity: 4000},
  {name: 'Phone', Price: 3000, quantity: 5000},
  {name: 'Mouse', Price: 2000, quantity: 2000}
 ]


//  TOTAL PRICE
totalPrice1 = 0
totalPrice2(){
  this.product.map( totalprice =>{
    this.totalPrice1 += totalprice.Price
    1
})
}


// higer salary
higherPaidStaff = this.behavior.pipe(
  map(users => users.filter(user => user.salary > 5000)
  )
);


// BEHAVIOR
loading = new BehaviorSubject<boolean>(false);
errorMessage = new BehaviorSubject<string>('');

loadStaff() {
  this.loading.next(true);
  this.errorMessage.next('');

  // failed request
  setTimeout(() => {
    this.loading.next(false);
    this.errorMessage.next('Unable to load staff data');
  }, 2000);
}






// ADD 10 PERCENT BONUS TO SALARY
addBonus(){
 const filter1 = this.employee.map( user =>
   ({
    name: user.name,
    salary: Math.round(user.salary * 1.10)
   })
  )
  console.log("UNDER 20", filter1)
  return filter1
}




// ALL IN ONE
  getHigher = this.employee
  .filter(user => user.salary >= 5000)
  .filter(user => user.department !== 'HR')
  .map(user => ({
    fullName: user.name.toUpperCase(),
    bonus: user.salary * 0.10,
    department: user.department
  }))
  // .filter(user => user.bonus >= 600);




  getStaff(){
    const id = "5"
    console.log('fetchuser() called');
    this.pageService.getuser().subscribe({
      next: (res)=>{
        console.log("Form API data", res)
        this.staff = res?.filter((m: any)=> m.id === id)

      this.staffData = res.map((item: any) => ({ ...item,
        fullName: `${item.fname || ''} ${item.lname || ''}`
      }));
              
            }
          })
  }
 


  updateSalary() {
  this.employee2.update(list =>
    list.map(user =>
      user.id === 1
        ? { ...user, salary: 4500 }
        : user
    )
  );

}



    constructor(){

  console.log('All staff:', this.staff);
  console.log('Greater salary:', this.result);
  console.log("getHigher",this.getHigher);

  

      // BEHAVORIAL SUBJECT
  
  // SALARY INCREMENT
   const salarySubject = new BehaviorSubject<number>(1000);

  salarySubject.pipe(
  filter(salary => salary >= 2000),
  map(salary => salary * 1.10)
).subscribe(result => {
  this.salaries = [...this.salaries, result];
});

  salarySubject.next(1500)
  salarySubject.next(3000)
  salarySubject.next(5000)

// map(salary => Number((salary * 1.10).toFixed(2)))



  // BEHAVORIAL SUBJECT FOR API CALL, FETCH FROM SERVICE
  this.pageService.loadStaff()

  this.pageService.staff.subscribe(data => {
    this.staff = data;
    console.log("Staff list", data)
  })



      // MULTIPLY NUMBER
      from([1, 2, 3, 4, 5]).pipe( map(num => num * 2)).subscribe(result => {
      console.log("Multiply", result)
  })


  

// DISPLAY THE HIGHEST NUMBER
// THE FROM TAKES VALUES AND CONVERT IT INTO OBSERVABLE AND EMIT IT (Rsjs)
  from([1, 2, 3, 4, 5, ]).pipe(map(num => num > 10)).subscribe(result => {
    console.log("Show result", result)
  })

  }

   oneUser = this.employee.filter(
  m => m.id === 5
)

  
  


   // SALARY GRATER THAN 5000 -----HTML
  result = this.employee.filter(
  staff => staff.salary > 5000
);

// TRANSFORM DATA
result2 = this.employee.map(
  staff => staff.name.toUpperCase()
) 


// Total value for each product
totalPrice = this.product.map(
  user => (user.Price) * user.quantity
  
 )

//  Total quantity
 totalQuntity = this.product.reduce(
  (total, user) => total + user.quantity,
  0
);

totalValue = this.product.reduce(
    (total, user) => total + user.Price * user.quantity,
    0
  );





  
  // EVEN AND ODD
   output: number[] = [];

  getEvenNumbers(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.output = numbers.filter(number => number % 2 === 0);
  }

  getOddNumbers(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.output = numbers.filter(number => number % 2 !== 0);
  }

// The zero checks 
// Is the remainder after dividing this number by 2 equal to zero?"
// If yes, the number is even. 4/2 0===0 true, 5/2 1===0 false

// Filter For every number in the numbers array, check whether its 
// remainder after division by 2 is not zero. Keep it if the condition is true.


}
