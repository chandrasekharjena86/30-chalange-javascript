// OPERATOR

// Task 1: write a pragram to add two number and log the result to the console.

let num1 = 23;
let num2 = 43;
console.log(num1 + num2);

// Task 2: write a pragram to subtract two number and log the result to the console.

let value1 = 43;
let value2 = 23;
console.log(value1 - value2);

// Task 3: write a pragram to multiply two number and log the result to the console.

const multi1 = 3;
const multi2 = 2;
console.log(multi1 * multi2);

// Task 4: write a pragram to divide two number and log the result to the console.

let div1 = 12;
let div2 = 2;
console.log(div1 / div2);

//Task 5: write a program to find the remainder when one number is divided by another and log the result to the console.

let devider1 = 34;
let devider2 = 12;
console.log((devider1 / devider2) % 100);

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let add = 10;
add += 20;
console.log(add);

//Task 7: Use the -= operator to subtract a number to a variable and log the result to the console.

let substract = 25;
substract -= 10;
console.log(substract);

//Task 8: write a program two number using > and < and log the result in console.

let check = 23;
let result = 32;
console.log(check < result);

//Task 9: write a program two number using >= and <= and log the result in console.

let lessthen = 23;
let lessthen1 = 12;

if (lessthen >= lessthen1) {
  console.log("the ans correct");
} else {
  console.log("the ans wrong");
}

// Task 10:write a program to compare two number using == and === and log the result in console.

let compare = 12;
let compare2 = "12";

if (compare == compare2) {
  console.log("they are same");
} else {
  console.log("they are not same");
}

let eqal = 12;
let eqal2 = "12";

if (compare === compare2) {
  console.log("they are same");
} else {
  console.log("they are not same");
}

// Task 11: write a program that use in ternary operator to chack if a number is positive or negative and log the result to the console.

let a = 34;
let b = 54;

console.log(a < b) ? a : b;

//Task 12: write a program that uses the && operator to combime two condition and log the result to the console.

let isAdult = 23;
let hasTicket = 31;
console.log(isAdult && hasTicket);
// or
if (isAdult && hasTicket) {
  console.log("correct");
} else {
  console.log("incorrect");
}

//Task 13: write a program that uses the || operator to combime two condition and log the result to the console.

let boys = 70;
let girls = 90;

if (boys || girls) {
  console.log("power");
} else {
  console.log("low power");
}

//Task 14:  write a program that uses the ! operator to combime two condition and log the result to the console.

let man = !12;
let women = !30;

if (man && women) {
  console.log("have ranny");
}else{
  console.log("not ranny");
}
