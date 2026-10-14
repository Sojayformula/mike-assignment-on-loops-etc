import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.scss',
})
export class Loops {

   output: string[] = [];

    numbers = [1,2,3,4,5,6,7,8];

   user = [
  {id: 1, name: 'John', role: 'admin', age: 5, salary: 200},
  {id: 2, name: "John", role: "admin", age: 8, salary: 600},
  {id: 3, name: "John", role: "admin", age: 2, salary: 100}
 ]



  constructor(){
    for(let i = 0; i < 5;){
  i++
 }

// FOR IN
for (let key in this.user) {
  console.log("KEY", key);
}

for (let item in this.user) {
  console.log("KEY", item);
}





  for(let i = 0; i < this.user.length; i++){
  console.log(this.user)
 }

  for(let i = 0; i < 5; i++){
    console.log(i)
  };


    for(const user of this.user){
    console.log(user)
  }


  // GET THE TOTAL AGE OF ALL STAFF
  let totalAge = 0
  
  for(let i = 0; i < this.user.length; i++){
    totalAge += this.user[i].age;
  }
  console.log(totalAge)


  // find a particular staff
  for(let i = 0; i < this.user.length; i++){
    if(this.user[i].id === 2){
      console.log(this.user[i].name)
    }
  }

  // HOW MANY STAFF ARE IN THE ARRAY
  let count = 0
  for(let i = 0; i < this.user.length; i++){
    count++
  }
  console.log(count)

  let highestSalary = 0

  for(let i = 0; i < this.user.length; i++){
    if(this.user[i].salary > highestSalary){
      highestSalary = this.user[i].salary
    }
  }
  console.log("highest salary", highestSalary)



  let i = 1
  while(i <= 5 ){
    console.log(i)
    i++
  }



  }




  private show(lines: (string | number)[]){
    this.output = lines.map(String);
  }

  // This method takes an array of numbers or strings, 
  // converts every item into a string, and stores the 
  // result in this.output so you can display it in your HTML.



// DISPLAY MENU
  menuDoWhile(){
    const choices = [1, 2, 0];
    const result: string[] = [];
    let i = 0;
    let choice: number;

    do {
      choice = choices[i++];

      if (choice === 1) {
        result.push('Start');
      } else if (choice === 2) {
        result.push('Settings');
      } else if (choice === 0) {
        result.push('Exit');
      }

    } while (choice !== 0 && i < choices.length);

    this.show(result);
  }


   conditionWhile(){
    const result: number[] = [];
    let temperature = 100;

    while (temperature > 50) {
      result.push(temperature);
      temperature -= 10;
    }

    this.show(result);
  }

  //  temperature -= 10; shorter way writing the below code
  // temperature = temperature - 10;
  //  Every time the loop runs, the temperature decreases by 10.


   // 7. Multiple conditions
  multipleConditionsWhile(){
    const result: string[] = [];
    let i = 1;
    let j = 10;

    while (i <= 5 && j >= 6) {
      result.push(`${i}, ${j}`);
      i++;
      j--;
    }

    this.show(result);
  }




}




  



 