function wait1(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

// Placeholder wait function
function wait2(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

// Placeholder wait function
function wait3(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

function call(t1, t2, t3) {
  return wait1(t1)
    .then(function () {
      return wait2(t2);
    })
    .then(function () {
      return wait3(t3);
    });
}

function calculateTime(t1, t2, t3) {
  let start = new Date();

  return call(t1, t2, t3).then(function () {
    let end = new Date();
    return end.getTime() - start.getTime();
  });
}

// Example usage
calculateTime(1, 2, 3).then((time) => {
  console.log(`Total time taken: ${time} ms`);
});
