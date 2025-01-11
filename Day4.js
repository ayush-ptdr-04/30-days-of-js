var createCounter = function (init) {
  let n = init;
  let increment = function () {
    n += 1;
    return n;
  };

  let decrement = function () {
    n -= 1;
    return n;
  };

  let reset = function () {
    n = init;
    return n;
  };

  return {
    increment,
    decrement,
    reset,
  };
};
let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
