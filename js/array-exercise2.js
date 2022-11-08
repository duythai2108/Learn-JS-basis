//1 Cho 1 mang gom nhieu gia tri [1,1000,false,null,"evondev",undefined,"","javascript",[1,2,3]].Viet chuong trinh loai bo nhung gia tri falsly chi de lai gia tri trutly
const array = [
  1,
  1000,
  false,
  null,
  "evondev",
  undefined,
  "",
  "javascript",
  NaN,
  [1, 2, 3],
];
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);
//2 cho 1 mang phuc tap [[1,2,3], [false,null], [1,5,6,["Javascript"]], [888,666,[90]]]. Va ket qua mong muon la mang don gian
const complexArray = [
  [
    [1, 2, 3],
    [false, null],
  ],
  [1, 5, 6, ["Javascript"]],
  [888, 666, [90]],
];
//flatten array
//flat(number)
const result = complexArray.flat(3);
console.log(result);
// 3. Dao nguoc so nguyen -> Vi du 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  //convert to String
  //split("") -> [value]
  //reverse
  //join("")
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);

//4. Viet chuong trinh co ten la fizzBuzz voi dau vao la 1 so nguyen, va cho chay tu 1 toi so nguyen do roi kiem tra neu so chia het cho 2 thi in ra chu "Fizz", neu chia heet cho 3 thi in ra chu "Buzz", neu chia het cho ca 2 va 3 thi in ra "FizzBuzz"
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);
//  + - * / %
// 5. Cho 1 chuoi bat ki, dem so luong ki tu `vowels` co trong choi
function countVowels(string) {
  let count = 0;
  const character = "ueoai";
  for (let c of string.toLowerCase()) {
    if (character.includes(c)) count = count + 1;
  }
  return count;
}
console.log(countVowels("evondev"));
// "evondev" -> e v o n d e v
//  6 Cho 1 mang co gia tri so [1,2,3,1,1,2,3,3,2,2,2,5,5,5,6,6,7,7,6]. Viet moi func tra ve 1 arr co gia tri
function unique(arr) {
  let result = [];
  //   Array
  if (!Array.isArray(arr)) return result;
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 3, 1, 1, 2, 3, 3, 2, 2, 2, 5, 5, 5, 6, 6, 7, 7, 6]));
