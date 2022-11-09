// 1. offsetWidth offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); //do rong cua phan tu
log(boxed.offsetHeight); //do cao cua phan tu
log(boxed.offsetLeft); //Vi tri cua no so voi le ben trai
log(boxed.offsetTop); //Vi tri cua no so voi phia tren
log(boxed.offsetParent); //Lay ra phan tu cha de lay gia tri cua phan tu cha

// 2. ClientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth); //do rong cua phan tu tru di border
log(boxed.clientHeight); //chieu cao cua phan tu tru di border
log(boxed.clientLeft); //vi tri cua no so voi ben trai border
log(boxed.clientTop); //vi tri cua no so voi phia tren border

// 3. window.innerWidth,  window.outerWidth,  window.innerHeight, window.outerHeight
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.outerWidth);

// 4. selector.getBoundingClientRect() -> lay ra toa do, kich thuoc cua phan tu
log(boxed.getBoundingClientRect());

// Su khac nhau giua Node List va HTML Collection
const li = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");
log(li);
log(li2);
// Điểm giống: có thể truy cập = index, có độ dài length, giong mang nhung ko han la mang, khong su dung duoc phuong thuc pop,sfigt,push,map,...
// HTML Collection:ko su dung dcforEach, Node List thì được.

// Sự khác nhau giữa parentNode và parentElement
// Node: html,head,h3
// Element: gom 1
// parentElement có thể null
// docuemnt.documentElement -> lay the html
log(document.documentElement.parentElement); //null
log(document.documentElement.parentNode); //#document
