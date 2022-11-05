// String(Chuoi)
"Hello world";
"My Name is Thai";
`I am front end dev`;
// Duble quote, single quote, backticks
const name = "Evondev";
const job = "Designer";
// console.log(name);
// console.log(typeof name);
const newStr = "My name is Thai and I am Frontend Developer";
const newStr2 =
  "My name is " + name + " and I " + job + "am Frontend Developer";
// console.log(newStr);
// console.log(newStr2);
// ${variable}
const newStr3 = `My name is ${name} and I am ${job}`;
// console.log(newStr3);
// .length
// console.log(newStr3.length);
// index la vi tri cua tung ki tu trong chuoi bao gom ca khoang trang
const myStr = "   Frontend Developer D  ";
console.log(myStr.split(""));
console.log(myStr.split(" "));
console.log(myStr.split("/"));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Frontend")); //true
console.log(myStr.endsWith("Developer")); //true
console.log(myStr.includes("end")); //true
console.log(myStr.includes("thai")); //false
console.log(myStr.indexOf("D")); //9
console.log(myStr.lastIndexOf("D")); //19
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.repeat(5));
console.log(myStr.slice(0, 8)); // Frontend
console.log(myStr.slice(-5)); // per D
console.log(myStr.trim()); //remove space left and right
console.log(myStr.trimStart()); //remove space left va trimEnd nguoc lai
const myStr2 = "Frontend";
console.log(myStr2.charAt(0)); //f
// substr -> lay ra 1 phan cua chuoi(string)
// substr(index, length -> index: vi tri, length: so luong ki tu muon lay)
console.log(myStr2.substr(1, 5)); //ronte
// substring -> lay ra cac ki tu cua chuoi(string)
// substring(start index, end index);
console.log(myStr2.substring(1, 5)); //ront

const myStr3 = "    Frontend Developer D    ";
// Loai bo khoang trang 2 ben, dua tat ca ve IN HOA, thay chu Developer D thanh Developer and Designer, sau do repeat 2 lan
console.log(
  `Result of myStr3: ${myStr3
    .trim()
    .replace("Developer D", "Developer and Designer")
    .toLocaleUpperCase()
    .repeat(2)}`
);
