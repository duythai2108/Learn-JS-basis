// document.title -> the title trong trang web
console.log(document.title); //Javascript
document.title = "Welcome to javascript course";
// document.head -> head trong trang html
console.log(document.head);
//  <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(meta);

// insertBefore
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3"));

// replaceChild
// node.replaceChild(newnode, oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML collection, NodeList
