let arr = [1, 3, 4];
let fn = function plusOne(n, i) {
  return n + i;
};

var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
console.log(map(arr, fn));
