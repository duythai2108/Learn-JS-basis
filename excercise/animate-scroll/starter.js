document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScroolTop = this.window.pageYOffset;
    [...images].forEach((item) => {
      //   const itemOffsetTop = item.offsetTop;
      if (windowScroolTop > item.offsetTop - item.offsetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
