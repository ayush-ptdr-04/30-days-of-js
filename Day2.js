// let createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };

// let conunter = createCounter(2);
// console.log(conunter());
// console.log(conunter());
// console.log(conunter());

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 34, 4));
// acc = 0+curr, 0+1
// acc = 1+curr, 1+2
// acc = 3+curr, 3+34
// acc = 37+curr, 37+4 = 41
