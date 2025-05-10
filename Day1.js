let n = 2;
let arr = [2, 4, 5, 5, 6, 5, 3];

function chunkArray(arr, n) {
  let result = [];
  if (n > 0) {
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    return result;
  }
}

console.log(chunkArray(arr, n));
// module.exports = chunkArray;
