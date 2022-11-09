const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // Xoa het tat ca cac class active o ca tab-item
  [...tabItems].forEach((item) => item.classList.remove("active"));
  // add class acrive vao tab hien tai
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  //   [...tabContents][tabNumber - 1].classList.add("active");
}
