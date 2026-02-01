// Exercise 3: Array Methods with Arrow Functions
// Create a file named exercise3.js with the following:
// • Create an array of numbers:
const numbers = [1, 2, 3, 4, 5];
// • Use an arrow function with map() to square each number
const squared = numbers.map((num) => {
  // Your code here
  return num * num;
});
// • Use an arrow function with filter() to get only even numbers
const evens = numbers.filter((num) => {
  // Your code here
  return num % 2 === 0;
});
// • Use an arrow function with reduce() to sum all numbers
const sum = numbers.reduce((total, num) => {
  // Your code here
  return total + num;
}, 0);
// Expected output:
// Squared: [1, 4, 9, 16, 25]
// Even numbers: [2, 4]
// Sum: 15
