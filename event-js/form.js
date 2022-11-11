// 1. keyDown: khi nhấn xuống
const input = document.querySelector(".input");
// input.addEventListener("keydown", function (e) {
//   //   console.log(e.key); thuong dung
//   //   console.log(e.keyCode); khong nen dung
//   //   console.log(e.which); khong nen dung
//   //   e.ley; key nhap vao
//   if (e.key === "Enter") {
//     console.log("You hit enter");
//   }
// });

// 2. keyup: su kien nay se xay ra khi nhan phim roi tha ra
// input.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });

// 3. keypress: su kien nay xay ra khi ban nhan phim
// thu tu uu tien: keydown -> keypress -> keyup
// keypress se ignore cac phim nhu delete, mui ten, page up, page down
// input.addEventListener("keypress", function (e) {
//   console.log(e.key);
// });

// 4. Change
input.addEventListener("change", function (e) {
  //   console.log("working");
});

// 5. focus
input.addEventListener("focus", function (e) {
  //   console.log("input is focusing");
});

// 6. blur
input.addEventListener("blur", function (e) {
  //   console.log("input is blur");
});

// 7. submit form
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   //   console.log(this);
//   //   console.log(e.target);
//   // this.elements
//   //   console.log(this.elements);
//   console.log(this.elements["username"]);
//   console.log(this.elements["username"].value);
//   const username = this.elements["username"].value;
//   const gender = this.elements["gender"].value;
//   const hobby = this.querySelectorAll(`input[name="hobby"]`);
//   let hobbyValues = [];
//   [...hobby].forEach((item) => hobbyValues.push(item.value));
//   console.log(hobbyValues);
//   console.log({ username, gender });
// });

// * Validation
// email: abc@gmail.com
// Regular expression
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("Please enter your username");
    return;
  }
  if (!password) {
    alert("Please enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("To short");
    return;
  }
});
