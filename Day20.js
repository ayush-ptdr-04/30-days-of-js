// largest number
function formLargestNumber(arr) {
  // this function takes arr input
  let strNums = arr.map((num) => num.toString()); // each no. of array convert into string
  strNums.sort((a, b) => {
    //this method mehtod sort the array based on "30"+"3" or "3"+"30" which is greater that number return
    return (b + a).localeCompare(a + b);
  });
  if (strNums[0] == 0) {
    return "0";
  }
  return strNums.join(""); // join array of string with no space
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;
