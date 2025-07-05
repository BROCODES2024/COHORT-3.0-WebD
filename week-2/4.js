let myPromise = new Promise(function (resolve, reject) {
    // Do some async work
    let success = true;

    if (success) {
        resolve("✅ Operation successful!");
    } else {
        reject("❌ Operation failed.");
    }
});
myPromise
    .then(function (result) {
        console.log("Then block:", result);
    })
    .catch(function (error) {
        console.log("Catch block:", error);
    });
