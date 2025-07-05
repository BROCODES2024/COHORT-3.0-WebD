function isEven(num) {
    return new Promise(function (resolve, reject) {
        if (num % 2 === 0) {
            resolve("✅ Number is even.");
        } else {
            reject("❌ Number is odd.");
        }
    });
}

isEven(4)
    .then((msg) => { console.log(msg) })
    .catch((err) => { console.log(err) });

isEven(5)
    .then((msg) => { console.log(msg) })
    .catch((err) => { console.log(err) });
