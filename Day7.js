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
