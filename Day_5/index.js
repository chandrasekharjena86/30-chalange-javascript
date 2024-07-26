// FUNCTION

// Task 1: write a function to check if a number is even or odd  log the result to the console.
function checkEven(condition) {
  if (condition % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

checkEven(32);
checkEven(33);

// Task 2: Write a function to calculate the squre of a number and return the result.

function check(number) {
  return number * number;
}
console.log(check(3));

// Task 3: Write a function expression to find the maximum of two number and log the result to the console.

function maximumNumber(a, b) {
  const max = a > b ? "big" : "small";
  return console.log(max);
}
maximumNumber(20, 50);

// Task 4: Write a function expression to concatenate two string and return the result.

function addName(Doremon, Nobita) {
  console.log(Doremon + Nobita);
  return;
}
addName("chandra", "jena");

// Task 5: Write an arrrow function to calculate the sum of two number and return the result.

const addNumber = (a, b) => {
  console.log(a + b);
  return;
};
addNumber(4, 6);

// Task 6: Write a arrow function to check if a string contain a specific charecter and return a boolen value.
const str = "hello dear";
const char = "r";

const containsChar = (str, char) => {
  return str.includes(char);
};

console.log("check " + containsChar(str, char));

// Task 7: Write a function that takes two parameter and returns their product provide a default value for the second parameter.

const product = (a, b = 1) => {
  console.log(a * b);
  return;
};
product(4, 3);
product(7); // output should be 7  since b is default to 1

// Task 8: Write a function that takes a persons name and age and return a greeting message provide a default value for the age.

function persons(name, age = 20) {
  return `my name ${name} and check age ${age}`;
}
console.log(persons("chandra", 50)); //defalt age should be 20

// Task 9: Write a higher-order function that takes a function and a number ,and call the function that many times.
