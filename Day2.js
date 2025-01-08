let createCounter = function (n) {
  return function () {
    return n++;
  };
};

let conunter = createCounter(2);
console.log(conunter());
console.log(conunter());
console.log(conunter());
