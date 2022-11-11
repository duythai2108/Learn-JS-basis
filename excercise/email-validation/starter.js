// Email validation
// valid email: abc@gmail.com
const emailInput = document.querySelector(".input");
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value.trim())) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
  if (!value) {
    e.target.classList.remove("invalid");
  }
});
