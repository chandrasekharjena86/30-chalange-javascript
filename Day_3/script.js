//Control Structure

//Task 1: Write a program to check if a number is positive ,negative or Zero and log the result to the console.

let number = 12;

if (number < 2) {
  console.log(`${number} is positive`);
} else if (number > 2) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is Zero`);
}

//Task 2: write a program to check if a person is eligible to vote (age >=18) and log the result to the console.

let personAge = 32;

if (personAge >= 18) {
  console.log("you are eligible for vote");
} else {
  console.log("you are not eligible for vote");
}

//Task 3: write a program to find the largest of three numbers using nested if-else  statement.

let num1 = 12;
let num2 = 23;
let num3 = 59;

let largest;

if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  }
} else {
  if (num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
}
console.log(largest);

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let week = 8;

switch (week) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thersday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Please Enter Valid Week Number");
}

// Task 5: Write  a program that uses a switch case to assign a grade ("A","B","C","D","F") based on a scope and log the grade to tthe console.
let score = 40;

switch (true) {
  case score >= 75:
    console.log("Grade A (min. 75+)");
    break;
  case score >= 60:
    console.log("Grade B (min. 60+)");
    break;
  case score >= 50:
    console.log("Grade C (min. 50+)");
    break;
  case score >= 40:
    console.log("Grade D (min. 40+)");
    break;
  case score >= 20:
    console.warn(".....FAIL.....");
    break;
  default:
    console.log("Try to check min result");
}

// Task 6: Write a program that use ternnary operator to check if a number is even and odd and log the result in console.

// ternary operator use ? :
let num = 43;

let result = num % 2 === 0 ? "even" : "odd";

console.log(result);

// Task 7: write a program to check if a year is a leap year using multiple condition (divisible by 4 ,but not 100 unless also divisible by 400 ) and log the result to the console.

function Leapyear(year) {
  if ((0 == year % 4 && 0 !== year % 100) || 0 == year % 400) {
    console.log(year + "year a leap year");
  } else {
    console.log(year + "is not leap year");
  }
}
const year = prompt("enter your year");
Leapyear(year);
