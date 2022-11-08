// DOM la gi ?
// Document Object Model
// DOM attribute : src,type,id,class..
// DOM node: HTML,span,p,...
// 2. Selecting node
// * 2.1 document.querySelector("selector") -> tra ve 1 node neu ton tai, khong ton tai tra ve null
// .header, p, body, #heading -> css selector
const singgleNode = document.querySelector("h1");
const singgleNode2 = document.querySelector(".container");
const singgleNode3 = document.querySelector("#spinner");
console.log(singgleNode);
console.log(singgleNode2);
console.log(singgleNode3);

// *2.2 document.querySelectorAll("selector") -> tra ve mot NodeList chua danh sach cac node, neu khong co thi tra ve empty
// no co the loop va su dung: forEach.
// no giong array la co the loop nhung khong the dung duoc cac phuong thuc nhu push,pop,....
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);

// *2.3 document.getElementsByClassName("header") ->tra ve mot HTMLCollection chua danh sach cac node, neu khong co thi tra ve empty
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

// * 2.4 document.getElementsByTagName("tagName") ->tra ve mot HTMLCollection chua danh sach cac node, neu khong co thi tra ve empty
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

// * 2.5 document.getElementById("id") -> tra ve 1 node
const idNode = document.getElementById("spinner");
console.log(idNode);

// ! Hay dung nhat la document.querySelector() va document.querySelectorAll()