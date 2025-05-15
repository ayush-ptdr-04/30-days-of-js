function correctWords(sentence) {
  let words = sentence.trim().split(" ");
  words = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  words.filter(Boolean);

  return words.join(" ");
}

console.log(correctWords("    hello Brother"));
