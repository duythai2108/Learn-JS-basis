// 1. textContent -> duoc su dung nhieu
const spinner = document.querySelector("#spinner");
// Thay doi text content
// spinner.textContent = "Hello i am Duy Thai";
console.log(spinner.textContent);

// * 2. innerText -> loai bo khoang trang, xuong hang
console.log(spinner.textContent);
console.log(spinner.innerText);

// *3 innerHTML -> lay ra noi dung cua selector bao gom hrml
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo"> hello html</div>`;

