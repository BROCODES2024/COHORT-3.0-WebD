let namee = "chetan";
const num = 28;
let iseligible = true;
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(namee);
console.log(num);
console.log(iseligible);

let sum = 10 + 18;
let isequal = 10 === 10;

function greet(namee) {
  return "Hello" + namee;
}
console.log(greet);

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (let i = 0; i < 100; i++) {
  console.log(i);
}
let j = 0;
while (j < 101) {
  console.log(j);
  j++;
}

let user = {
  namee: "Chetan Reddy",
  age: 20,
};

console.log(user.namee);

function greet(use) {
  return user.namee + " hi";
}
console.log(greet());

const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers10.length);
const firstnum = numbers10[0];
console.log(firstnum);

function getEvenNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}
const numberss = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(numberss);
console.log(evenNumbers); // Output: [2, 4, 6]

//array of objects
let users = [
  {
    name1: "chetan",
  },
  {
    name2: "reddy",
  },
];
const user1 = users[0];
const user1Age = users[0].age;

//objects of objects
const user12 = {
  name: "harkirat",
  age: 19,
  address: {
    city: "Delhi",
    country: "India",
    address: "1122 DLF",
  },
};

const city = user1.address.city;
