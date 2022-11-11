window.addEventListener("load", function () {
  const text = this.document.querySelector(".text");
  text.addEventListener("mouseenter", function (event) {
    const title = event.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = event.target.getBoundingClientRect();
    const { top, left, width, height } = cords.left;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangHeight = 20;
    tooltipDiv.style.left == `${left - width}px`;
    tooltipDiv.style.top == `${top - tooltipHeight - triangHeight}px`;
  });
});
