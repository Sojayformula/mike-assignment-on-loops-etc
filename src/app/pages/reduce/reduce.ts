import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce',
  imports: [],
  templateUrl: './reduce.html',
  styleUrl: './reduce.scss',
})
export class Reduce implements OnInit{

 
  
  numbers = [1,2,3,4,5,6,7,8];
   product = [
  {name: 'Laptop', Price: 5000, quantity: 4000},
  {name: 'Phone', Price: 3000, quantity: 5000},
  {name: 'Mouse', Price: 2000, quantity: 2000}
 ]


constructor(){
 
}
 
 


  ngOnInit(){
    console.log("count", this.totalNumber);

  };


//   TOTAL NUMBER
  totalNumber = this.numbers.reduce(
    (sum, number)=> sum + number, 0
  );

  largest = this.numbers.reduce(
    (max, number) => number > max ? number : max, this.numbers[0]
  );

  // TOTAL PRICE
  price = this.product.reduce(
    (sum, product) => sum + product.Price, 
    0
  )

  // TOTAL QUANTITY
  productQuantity = this.product.reduce(
    (sum, products) => sum + products.Price * products.quantity, 0
  )

 
  

 

  // ADD NUMBERS AND EVEN NUMBER
  countEvenOdd(){
  const numbers = [1, 2, 3, 4, 5, 6];

  const result = numbers.reduce(
    (counts, number) => {
      if (number % 2 === 0) {
        counts.even++;
      } else {
        counts.odd++;
      }

      return counts;
    },
    { even: 0, odd: 0 }
  );
  console.log("EVEN", result)
}

  // this.show([
  //   `Even numbers: ${result.even}`,
  //   `Odd numbers: ${result.odd}`
  // ]);

  // // number % 2 calculates the remainder after dividing by 2.

  // // If the remainder is 0, the number is even.

  // // If the remainder is not 0, the number is odd.
  }