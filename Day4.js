/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const n = init;
  function increment() {
    return (init += 1);
  }
  function decrement() {
    return (init -= 1);
  }
  function reset() {
    return (init = n);
  }
  return {
    increment,
    decrement,
    reset,
  };
};
