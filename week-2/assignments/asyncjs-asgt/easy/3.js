const fs = require("fs");

// Asynchronous file read
fs.readFile("./week-2/assignments/easy/1.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("✅ File content:\n", data);
});

console.log("📌 Starting expensive operation...");

// Expensive synchronous operation
let sum = 0;
for (let i = 0; i < 1e10; i++) {
  sum += i;
}

console.log("🧮 Expensive operation done. Sum =", sum);

// fs.readFile is non-blocking and runs asynchronously.

// The loop is synchronous, so it blocks the main thread.

// The file content is printed after the CPU-intensive loop, even though readFile was called before the loop.
