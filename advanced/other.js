// * 1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); //2,1
let a = 1;
let b = ++a;
console.log(a, b); //2 2

// * 2. Luu ys khi return function
function total(x, y) {
  return x + y;
}

// 3. 2 cach chuyen doi du lieu moi
const str = "123";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str); //cach doi sang number moi nhat
if (!!str) {
  // dung dau nay covert sang boolean
}

// * 4. agruments
function number(a, b, c) {
  console.log(arguments[0]);
}
number(1, 2, 3);

//* 5. Closure in loop, hay duoc phong van
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z);
  }, 1000);
}
// var -> hoisting
// scope cua var sau moi vong lap thi no khong thay doi
//  thay vi dung var chung ta se dung let de tranh TH nay

// * 6 Sự khá nhau giữa localStograge và sessionStorage
//  localStorage.getItem(), dong tab van con
// sesionStorage.getItem() chi lam trong tab, dong tab la mat

// * Những trường hợp không nên sử dụng arrow function
const input = document.querySelector(".input");
input.addEventListener("keyup", function () {
  console.log(this.value);
});
// Khi su dung arrow cho (event handler) khong su dung dc this
// Trong object

// * 9.Set
const mySet = new Set();
mySet.add(1);
mySet.add("Duythai");

console.log(mySet);
mySet.has(1); //true
mySet.delete("Duythai");
console.log(mySet);
console.log(mySet.size);
mySet.clear();
// ap dung my set thanh array unique
const arr = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 7, 7, 8, 8, 9, 9, 9];
const myset2 = new Set(arr);
console.log(myset2);
// set to array
const newArr = Array.from(myset2);
console.log(newArr);

// * Cach debug trong javascript
