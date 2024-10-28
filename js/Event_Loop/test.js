console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 10);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

process.nextTick(() => {
  console.log("Next Tick 1");
});

setImmediate(() => {
  console.log("Immediate 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 10);

Promise.resolve().then(() => {
  console.log("Promise 3");
});

process.nextTick(() => {
  console.log("Next Tick 2");
});

console.log("End");
