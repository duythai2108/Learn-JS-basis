// function (ham)
// Khai bao function
// Cu phap(Syntax) : function functionName(parameters){
// YOur code here
// }
// De bai: Viet ham tinh tong 2 so a va b
function sum(a, b = 10) {
  //   console.log(a, b);
  const total = a + b;
  return total;
  //   return, khong co return thi ket qua cua ham tra ve la undefined
  //   return value
}
// sum() : invoke function
console.log(sum(5));
// invoke function sum(agruments) DOi so
// Luu function vao 1 bien roi goi sau
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
const sum2 = add; //gan co function cho bien sum2
sum2(300, 400);
// Tham so la function
// Tinh trung binh cua a va b -> (a + b) /2
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2);
console.log(`result: ${result}`);
// function declaration
// Anonymous function(function expression)
// Khong bi hoisting
const logName = function () {
  console.log("your name");
};
logName();
// IIFEE -> immediately ivoked function execution
(function () {
  console.log("This is IIFE function");
})();

// Scope
// Global scope, function scope
let myName = "evondev"; //global scope
function logYourName() {
  let myName2 = myName; //function scope
  console.log(myName2);
}
logYourName();
// block scope
if (2 > 1) {
  //   let message = "Hello evondev"; //block scope
  const message = "Hello evondev"; //block scope
  var message2 = "Hello Thai"; //global scope, hoisted
}
// alert(message2);

// Lexical scope
let aNewName = "Evondev"; //global scope
function sayHello() {
  let message5 = "Hi"; //block scope
  console.log(`${message5} ${aNewName}`);
}
// sayHello();
// Closure , func con co the truy xuat scope cua func cha
// function sayHello2() {
//   //parent func
//   let message = "hi";
//   function sayHi() {
//     //child func
//     console.log(message);
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
}
let hello = sayHello3("Welcome to Javascripts");
hello(" Closure");

function anotherFunction() {
  let otherMessage = "hello";
  function sayHi() {
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc = anotherFunction(); //otherMessage is no longer
callFunc(); //hello

// * Arrow function : anonymous function
// ECMASCript
// Normal function: annoymous function
const square = function (x) {
  return x * x;
};
square(5); //25
// Arrow function
const square2 = (x) => {
  // if else
  return x * x;
};
// rut gon khi return
const square3 = (x) => x*x;
