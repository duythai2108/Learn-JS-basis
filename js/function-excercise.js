// 1. Viet function so sanh 2 so a, b tim ra so lon hon
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter valid number");
    return;
  }
  return Math.max(a, b);
}
console.log(compare("aaa", 200));

// 2. In hoa chu cai dau trong chu vi du: tuan -> Tuan, NAM -> Nam
function capitalize(word = "") {
  if (word.length === 0) return null;
  // convert to lower case first
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  //   charAt(index)
  //   console.log(newWord);
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
console.log(capitalize("NAM"));

// Viet ham su dung callback (function la paramenter cua function khac) in ra ket qua cua ham comapre da viet o tren
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
function printed(number) {
  console.log("Max number is " + number);
}
console.log(useCallback(500, 1000, printed));
