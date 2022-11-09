//addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
  console.log("Cick button");
}
// Loi sai khi dung funtion addeventListen
// button.addEventListener("click", handleClick());
// Cach dung dung
// button.addEventListener("click", function () {
//   console.log("Cick me");
// });
// Cach 2

// event: e
// span.addEventListener("click", function (e) {
//   e.stopImmediatePropagation(); //ngan chan su noi bot cua tat ca tru no
//   //   e.stopPropagation(); //ngan chan su noi bot cua 2 event
//   console.log("Click span !!");
// });
// span.addEventListener(
//   "click",
//   function () {
//     console.log("Click span2 !!");
//   },
//   {
//     capture: true,
//   }
// );
// document.body.addEventListener("click", function () {
//   console.log("Click body");
// });
// bubbling: nổi bọt
// su kien click chay tu trong ra ngoai
// capture: ngược với nổi bọt chạy từ ngoài vào trong

// target vs currentTarget
button.addEventListener("click", function (e) {
  //   event.target nos se chon chinh xac element ma minh click toi
  console.log(e.target);
  //   event.currentTarget: chon phan tu ma minh click
  console.log(e.currentTarget);
});

// event.preventDefault(); nganư chặn hành vi mặc định nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // select.style
  // event.target.style
  // console.log(event.target);
  // console.log(event.target.style);
  // event.target.style.color = "red";
});
