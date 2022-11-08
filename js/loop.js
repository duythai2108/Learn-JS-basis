//Vong lap
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
    for(let i = 0; i < number.length; i++) {
        body code
    }
*/
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }

// for (let i = 0; i < numbers.length; i += 2) {
//   console.log(`The index is ${i}`);
// }
// i++ -> i = i + 1

//numbers[0]
//number[numbers.length - 1]
for (let i = 0; i < numbers.length; i++) {
  //   console.log(`The index is ${i}`);
  //Neu gia tri la 8 thi dung vong lap
  //   console.log(`The value is ${numbers[i]}`);
  //   if (numbers[i] === 8) {
  //     break;
  //   }
  //   Neu gia tri la 8 thi bo qua gia tri do
  if (numbers[i] === 8) {
    continue;
  }
  //   console.log(`The value is ${numbers[i]}`);
}
//Nested looop
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(`The value is ${numbers[i]}`);
//   for (let j = numbers.length - 1; j >= 0; j--) {
//     console.log(j);
//   }
// }

// 1 sao chep mang dung vong lap for
let copyArr = [];
// 1 2 3 4
//push
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);
// 2 dao nguoc tu "i love you" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);

//while va do while
// while(condition)
let number = 1;
while (number < 10) {
  //   console.log("number is " + number);
  // dieu kien dung
  number = number + 1;
  // number++
}
/**
 do {

 } while(conditon)
 */
// let number2 = 1;
// do {
//   number2++;
//   console.log("number is " + number2);
// } while (number2 < 10);

//for of
//for(value of array){}
for (let value of numbers) {
  value += 10;
  console.log(value);
}
for (let c of "evondev") {
  console.log(c);
}
