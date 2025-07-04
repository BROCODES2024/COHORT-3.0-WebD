function sum(a, b) {
  return a + b;
}
console.log(sum(10, 18));

function sum1ton(n) {
  return (n * (n + 1)) / 2;
}
console.log(sum1ton(7));

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans1 = sum(1000);
console.log(ans1);
const ans2 = sum(10000);
console.log(ans2);
const ans3 = sum(100000);
console.log(ans3);

const fs = require("fs");

const contents = fs.readFileSync("./a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("./1_0.txt", "utf-8");
console.log(contents2);

fs.readFile("./a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

function sum(a, b) {
  return a + b;
}
function product(a, b) {
  return a * b;
}
function divison(a,b){
  return a / b;
}
function subtraction(a, b) {
  return a - b;
}   
function dooperation(a,b,operation){
  return operation(a, b);
}
console.log(dooperation(10, 20, sum));

function run(){
  console.log("i will run after 5 seconds");
}
setTimeout(run, 5000);
console.log("i will run immediately");