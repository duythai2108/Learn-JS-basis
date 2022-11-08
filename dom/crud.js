// them, xoa, sua node trong Javascript
// 1. Tao ra Element trong javascript: document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "lorem";
div.innerHTML = `<div class = "container"</div>`;
// Bai tap tao ra HTML nhu da minh hoa o file HTML
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "random.com.vn");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);
// 3. document.createTextNode
const text = document.createTextNode("hello my name is Thai");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 5. element.hasChildNodes -> kiem tra co phan tu con hay khong, co -> true, khong -> false
console.log(h1.hasChildNodes());
