// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Felix"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log("Add:", add(2, 3));

// Arrow function
const square = (x) => x * x;
console.log("Square:", square(4));

// Function with default parameter
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}!`);
}
welcome();
welcome("Nova");