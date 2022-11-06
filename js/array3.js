// By value vs By referrences
//  By value -> gia tri that su duoc luu trong vung bo nho
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);
// by referrecnces -> noi toi vung bo nho
const arr1 = [1, 2];
const arr2 = [1, 2];
// console.log(arr1 === arr2);
// JSON Javascript Object Notation
/**
 {
    "key": value,
    "key": value,
    "key": value
 }
 */
// JSON.stringify(value) -> convert gia tri sang duoi dang JSON string
// JSON.parse("value") -> [value]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); //true
// clone
const students = ["a", "b", "c", "d", "e"];
// students.pop(); //xoa phan tu cuoi cung
// 1.su dung phuong thuc slice()
const sliceStudents = students.slice();
console.log(sliceStudents);
//* 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);

// Gop mang
// [1, 2] [3,4] [5,6] -> [1,2,3,4,5,6]
//1 concat
// array1.concat(array2,array3,arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// spread operator
//[...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0]; //ball
const b = toys[1]; //sword
const c = toys[2]; //arrow

//const [] = toys; -> dung destructring
const [x, y, z, ...rest] = toys;
console.log(x, y, z, rest); //ball sword arrow
console.log(rest); //
//rest parameter
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);
