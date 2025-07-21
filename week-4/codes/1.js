const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../Notes/1_0.txt");
console.log(filePath);

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
