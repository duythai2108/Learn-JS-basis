const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (e) {
  if (e.target.matches(".modal-close")) {
    const modal = e.target.parentNode.parentNode; //modal
    // console.log(modal.target);
    modal.parentNode.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
});
// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", handleClose);
// function handleClose(e) {}
