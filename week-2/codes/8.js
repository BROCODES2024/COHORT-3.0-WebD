function setTimeoutPromisified(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
};
// setTimeoutPromisified(1000)
//     .then(
//         () => {
//             console.log("Hi");
//             return setTimeoutPromisified(3000);
//         }
//     )
//     .then(
//         () => {
//             console.log("Hello");
//             return setTimeoutPromisified(5000);
//         }
//     )
//     .then(() => { console.log("Hello There") })
async function solve() {
    await setTimeoutPromisified(1000)
    console.log("Hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello There")
}
solve();