// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// selector.parentNode hoac selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span); //* hay dung nhat

// 2. nextElementSibling vs previousElementSibling
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNode:Tra ve het cac node ben trong bao gom textNode vs chidren: tra ve cac node khong bao gom textNode
console.log(span.childNodes); //text strong text
console.log(span.children);
//4. firstChild vs firstElementChild
console.log(span.firstChild); //text
console.log(span.firstElementChild); //strong

//5. lastChild vs lastElementChild

//6 nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
