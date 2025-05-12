let n = 2;
let arr = [2, 4, 43, 343, 4];

function chunks(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

console.log(chunks(arr, n));
