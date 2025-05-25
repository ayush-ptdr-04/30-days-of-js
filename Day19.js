function groupBy(arr, key) {
  const result = {};
  for (const item of arr) {
    const keyValue = item[key];
    console.log(keyValue);
    if (!result.hasOwnProperty(keyValue)) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }
  return result;
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
