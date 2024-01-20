let userName = prompt("Hey! What's your name?");

if (userName) {
  console.log(`Hello ${userName}`);
} else {
  console.log(`Hello guest`);
}
// have user input 2 numbers
let num1 = parseFloat(prompt("Enter the a number", 3));
let num2 = parseFloat(prompt("Enter the another number", 9));

// ask user what operation they want to perform
let operation = prompt(
  "What would you like to do with these numbers? Add, subtract, multipl, divide, or modulus?",
  "add"
);

if (operation === "add") {
  console.log(num1 + num2);
} else if (operation === "subtract") {
  console.log(num1 - num2);
} else if (operation === "multiply") {
  console.log(num1 * num2);
} else if (operation === "divide") {
  console.log(num1 / num2);
} else if (operation === "modulus") {
  console.log(num1 % num2);
} else {
  console.log(`Sorry we can't perform that operation, try again`);
}
