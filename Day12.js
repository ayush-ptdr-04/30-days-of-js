function makeCounter(initialValue = 0) {
  let currValue = initialValue;

  return {
    increment: () => ++currValue,
    decrement: () => --currValue,
    reset: () => initialValue,
  };
}

const counter = makeCounter(5);
console.log(counter.increment()); // should print 6
console.log(counter.increment()); // should print 6
console.log(counter.reset()); // should print 5
