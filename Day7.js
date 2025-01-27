// this logic make mySelf
var reduce = function (nums, fn, init) {
  accum = init;
  if (nums.length === 0) {
    return init;
  } else {
    for (let i = 0; i < nums.length; i++) {
      curr = num[i];
      val = fn(accum, curr);
      acc = val;
    }
    return val;
  }
};
// this is  short solution
var reduce = function (nums, fn, init) {
  accum = init;
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
};
