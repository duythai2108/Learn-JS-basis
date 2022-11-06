//  1. Dao nguoc mot chuoi. Vi du "My name is evondev" -> "evondev is name My";
function reverseString(str) {
  if (!str) return null;
  // split(" ")
  const arrStr = str.split(" ");
  const reverseStr = arrStr.reverse().join(" ");

  return reverseStr;
}
console.log(reverseString("My name is evondev"));

// 2. Dao nguoc 1 chuoi bao gom cac ki tu VD : "i love" -> "evol i"
function reverseWord(str) {
  if (!str) return null;
  const arrStr = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""));
  const result = arrStr.reverse().join(" ");
  console.log(result);
}
reverseWord("i love");

//3. In hoa chu cai dau trong cu vi du: "My name is evondev" -> "My Name Is Evondev"
function capitalize(word = "") {
  if (word.length === 0) return null;
  // convert to lower case first
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  //   charAt(index)
  //   console.log(newWord);
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (!str) return null;
  //str.plit(" ")
  const result = str
    .split(" ")
    .map((item) => capitalize(item))
    .join(" ");
  console.log(result);
}
capitalizeStr("my name is evondev");
