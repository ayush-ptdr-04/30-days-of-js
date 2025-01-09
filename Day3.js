/*

object is a collection of key  value pairs

 object literals


let obj = {
  name: "aayush",
  age: 18,
  greet(name) {
    return "good morning " + name;
  },
};
console.log(obj.greet("aayush"));



 objects within function

function calc(val1) {
  let obj = {
    add(val2) {
      return val1 + val2;
    },
  };
  return obj;
}

console.log(calc(5).add(5));
*/
let expact = function (val) {
  return {
    toBe(val1) {
      if (val === val1) return true;
      else throw new Error("not equal");
    },
    notToBe(val1) {
      if (val !== val1) return true;
      else throw new Error("equal");
    },
  };
};
// console.log(expact(2).toBe(2));
// console.log(expact(2).toBe(3));
// console.log(expact(2).notToBe(3));
// console.log(expact(2).notToBe(2));
