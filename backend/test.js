"use strict";

const fs = require("fs");

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile("tsconfig.json", callback);

  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
  }, 0);

  setImmediate(() => console.log("Executando primeiro!!!"));
}

const timeoutScheduled = Date.now();

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation((err, data) => {
  console.log("Data: ", data);
});
