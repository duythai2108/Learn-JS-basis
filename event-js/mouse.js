const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave

// mousemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// mouseover: no se chay khi re chuot vao phan tu va con cua phan tu do
// button.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });

// mouseenter: no se chay khi re chuot vao phan tu
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// mouseleave: no se chay khi re chuot vao phan tu roi re ra ngoai
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });

// pageX, pageY, clientX, clientY

document.addEventListener("mousemove", function (event) {
  console.log(`pageX: ${event.pageY}`);
  console.log(`ClientY: ${event.clientY}`);
});
// ClientY; no se lay toan do theo viewport
// pageY; no se lay toa do cua document,khi ma co scrool no se thay doi