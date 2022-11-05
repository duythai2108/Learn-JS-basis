"4.5"; //4.5 parseFloat
// Number(value) -> number
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abc")); //NaN
// NaN: not a number
console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
//falsy values
console.log(Number(true)); //1
// String(values) -> string
console.log(String(4.5)); //"4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN)); //"NaN"
console.log(String(false)); //"false"
console.log(String(true)); //"true"

// Boolean(value) -> true or false
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(false)); //false
console.log(Boolean(12321)); //true
console.log(Boolean("Hello")); //true
// type coercion
// + - * /
// weird
console.log(1 + 2);
console.log(10 + 10);
console.log(10 + "10"); //1010
console.log("10" - 10); //0
console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log("" - 1);
console.log(false - true); //-1
console.log(null + 10); //10
// toan tu so sanh > < >= <= 
console.log(5 > 7); //false
console.log(50 > 7); //true
console.log(50 < 7); //false
console.log(6 >= 6); //true
// Toan tu logic co ban: && || !
console.log(5 > 7 && 8 > 3); //false
console.log(5 > 7 || 8 > 3); //true
const amIwrong = false;
console.log(!amIwrong); //true
// Boolean &&
//false && true -> false
//false && false -> false
//true && false -> false
//true && true -> true
// Boolean ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false
//  == loose equality vs === stritch equality
console.log("=== vs ==");
console.log(10 == "10"); //true 
console.log(true == 1); //true 
console.log(1 == "01"); //true 
console.log(null == ""); //false 
console.log(typeof 10); //number
console.log(typeof "10"); //string
console.log( 10 === "10"); //false
console.log( 10 !== "10"); //true
console.log(true == "true"); //false

