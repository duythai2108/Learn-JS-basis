// * Active modal
// * cach 1
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-class";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nequeea sequi asperiores soluta maxime recusandae labore ipsum, iste nemovoluptatum quisquam nihil eos. Fugiat aliquam quisquam facere laborumquam.";
modalContent.appendChild(modalDesc);
document.body.appendChild(modal);
// *cach 2
// const template = `<div class="modal">
//       <div class="modal-content">
//         <i class="fa fa-times modal-class"></i>
//         <div class="modal-desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque
//           ea sequi asperiores soluta maxime recusandae labore ipsum, iste nemo
//           voluptatum quisquam nihil eos. Fugiat aliquam quisquam facere laborum
//           quam.
//         </div>
//         <div class="modal-action">
//           <button class="modal-submit">Confirm</button>
//           <button class="modal-cancel">Cancel</button>
//         </div>
//       </div>
//     </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    modalWrapper.classList.add("isShow");
  }, 3000);
}
