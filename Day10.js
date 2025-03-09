var once = (fn) => {
  let called = false;
  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
onceFn(1, 2, 3);
onceFn(1, 3, 3);
