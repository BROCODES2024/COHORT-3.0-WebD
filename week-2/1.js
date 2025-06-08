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

const contents = fs.readFileSync("./week-2/a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("./week-2/1_0.txt", "utf-8");
console.log(contents2);
