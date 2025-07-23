const fs = require("fs");

// Asynchronous write to file
fs.writeFile(
  "output.txt",
  "Hello, this content was written asynchronously!\n",
  (err) => {
    if (err) {
      console.error("❌ Error writing to file:", err);
      return;
    }
    console.log("✅ File write completed!");
  }
);

console.log("📌 Starting expensive operation...");

// Expensive synchronous task (blocks event loop)
let total = 0;
for (let i = 0; i < 1e9; i++) {
  total += i;
}

console.log("🧮 Expensive operation done. Total =", total);
