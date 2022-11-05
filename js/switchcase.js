const fruit = "lemon";
// if (fruit === "apple") {
//   console.log("You like to eat apple");
// }
// if (fruit === "lemon") {
//   console.log("You like to eat lemon");
// }
// if (fruit === "watermelon") {
//   console.log("You like to eat watermelon");
// }
// switch (fruit) {
//   case "apple":
//     console.log("You like to eat apple");
//     break;
//   case "watermelon":
//   case "lemon":
//     console.log("You like to eat lemon and watermelon");
//     break;
//   default:
//     console.log("You like to eat orange");
//     break;
// }
// const number = "500";
// switch (Number(number)) {
//   case 18:
//     console.log("Em chua 18");
//     break;
//   case 500:
//     console.log("500");
//     break;

//   default:
//     break;
// }
// Ternary operator
const yourAge = 15;
let message = "You are young boy";
if (yourAge >= 18) {
  message = "You are aduly";
} else if (yourAge <= 10) {
  message = "You are still kid";
}
// condition ? true : false
let message2 = yourAge >= 18 ? "You are adult" : "You are kid";
console.log(message2);
let message3 =
  yourAge >= 18
    ? "You are adult"
    : yourAge <= 10
    ? "You are kid"
    : "You are young boy";
console.log(message3);
