function sleep(milliseconds) {
  return new Promise((resolve) => {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds);
    resolve();
  });
}

// Example usage
console.log(`Sleeping for ${2000} milliseconds...`);
sleep(2000).then(() => {
  console.log("Awake now!");
});
