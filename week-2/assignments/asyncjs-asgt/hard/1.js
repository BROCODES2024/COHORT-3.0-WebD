function wait(n) {
  let p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return p;
}

// Example usage
console.log(`Waiting for ${3} seconds...`);
wait(3).then(() => {
  console.log("Done waiting!");
});
