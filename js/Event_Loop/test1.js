console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
});

process.nextTick(() => {
  console.log("Next Tick 1");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

setImmediate(() => {
  console.log("Immediate 2");
});

process.nextTick(() => {
  console.log("Next Tick 2");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");
