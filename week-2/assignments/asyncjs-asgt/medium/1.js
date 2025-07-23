const fs = require("fs");

// Step 1: Read the file asynchronously
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading file:", err);
    return;
  }

  // Step 2: Remove extra spaces (multiple spaces → single space)
  const cleanedData = data.split(/\s+/).join(" ").trim();

  // Step 3: Write cleaned content back to the same file
  fs.writeFile("input.txt", cleanedData, (err) => {
    if (err) {
      console.error("❌ Error writing to file:", err);
      return;
    }
    console.log("✅ File cleaned and written successfully!");
  });
});
