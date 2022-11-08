// 1. selector.getAttribute("attribute") -> lay ra gia tri cua attribute selector
// * selector: 1 cai
// attribute -> thuoc tinh: href, id, class, src, style,...
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);

// *2 selector.setAttribute("attribute", value) -> set gia tri cho attribute nao do cua selector
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));

// * 3 selector.removeAttribute("attribute")
const p = document.getElementById("spinner");
p.removeAttribute("style");

// *4 hasAttribute("attribute") -> kiem tra selector co attribute nao do hay khong-> co tra ve true, ko co ve false
console.log(p.hasAttribute("class")); //false
console.log(p.hasAttribute("id")); //true
