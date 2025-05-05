// for loop
for (let i = 0; i < 3; i++) {
  console.log("for loop iteration:", i);
}

// while loop
let j = 0;
while (j < 3) {
  console.log("while loop iteration:", j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log("do...while loop iteration:", k);
  k++;
} while (k < 3);

// for...of loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("for...of fruit:", fruit);
}

// for...in loop
const person = { name: "Nova", age: 20, role: "Hacker" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}