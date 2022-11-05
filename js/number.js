// So nguyen: 1 2 3 999 444
// So thap phan: 3.4 5.8
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); //5
console.log(parseFloat(number2)); //4.8
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3)); //10
// Math.floor(value) -> lam tron xuong: 4.3 -> 4
console.log(Math.floor(4.3));
// Math.ceil(value) -> Lam tron len
console.log(Math.ceil(4.3)); //5
// Math.round(value) -> Lam tron gan nhat: 4.3 -< 4, 4.5 -> 5
console.log(Math.round(4.5)); //5
console.log(1 / 3);
// toFixed(number) vi du 0.3333333 -> 0.33
console.log(parseFloat((1 / 3).toFixed(2)));
console.log(Math.ceil(Math.random() * 10));
// Math.max(1,2,-5,100) -> tra ve con so lon nhat
console.log(`Max: ${Math.max(1, 3, 5)}`);
// Math.min(1,2,-5,100) -> tra ve con so nho nhat
console.log(`Min: ${Math.min(1, 3, 5)}`);
// Math.pow(number1, number2) ; -> 3^2
console.log(Math.pow(3, 2));
// isNaN(value) va Number.isNaN(value)
// NaN -> Not a Number
console.log(isNaN("This is a string")); //true
console.log(isNaN("12345")); //false -> isNaN(12345) -> false
console.log(Number.isNaN("12345")); //false
console.log(Number.isNaN(NaN)); //true
