//LOOP

// Task 1: Write a program to print number from 1 to 10 using a for loop.

for (let index = 1; index <= 10; index++) {
  const element = index;
  console.log(element);
}

// Task 2: Write a program to print the multiplication table of 5 using for loop.

for (let i = 1; i <= 10; i++) {
  console.log(` ${5 * i}`);
}

// Task 3: Write a program to calculate the sum of number from 1 to 10 using while loop.

let loopcount = 0;
while (loopcount <= 10) {
  loopcount++;
  console.log(`use loop count`, loopcount);
}

// 1 to 10 sum
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}

console.log(`The sum of the total 1 to 10 print ${sum}`);

// Task 4: Write a program to print number 10 to 1 using while loop.

let number = 10;
while (number >= 0) {
  number--;
  console.log(number);
}

//Task 5: write a program to print number 1 to 5 using  Do...while loop.
let printNumber = 1;
do {
  console.log(printNumber);
  printNumber++;
} while (printNumber <= 5);

// Task 6: write a program to calculate to factorial number using do...while loop.
// let  = 6;
// (i = 1), (fact = 1);

// do {
//   fact = fact * i;
//   i++;
// } while (i <= num);
// console.log(fact);
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let result = 1;
  let i = n;

  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}

console.log(factorial());

// Task 7: Write a program to print  a pattern using nested for loops.
let height = 5;

for (let i = 1; i <= height; i++) {
  let row = " ".repeat(height - i) + "* ".repeat(i);
  console.log(row);
}

// Task 8: write a program  to print  number from 1 to 10 ,but skip the number  5 using the continue statement.

for (let j = 1; j <= 10; j++) {
  if (j === 5) {
    continue;
  }
  console.log(j);
}

// Task 9: write a program  to print number from 1 to 10 , but stop the loop the loop when the number is 7 using brake statement.
for (let k = 1; k <= 10; k++) {
  if (k > 7) {
    break;
  }
  console.log(k);
}
