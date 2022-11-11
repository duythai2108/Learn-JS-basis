window.addEventListener("load", function () {
  const togglePassword = this.document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    const input = this.previousElementSibling;
    // console.log(input);
    const inputType = input.getAttribute("type");
    if (inputType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
