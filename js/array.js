//  Array : Mảng
const a = "a";
const b = "b";
const c = "c";
// 2 cach tao arrays
//Arrray literal -> duoc dung nhieu nhat
// const students1 = [];
// constructor
const students2 = new Array();
// vi du mot mang
// Mang phuc tap [0, false, undefined, null, "evondev", ["evondev", false, 1200], []]
// Mang don gian [0, false, undefined, null]
//   []: empty array -> mang rong
// const students1 = ["evondev", "thai", "tuabn", "thanh", "trung"];
// 0 1 2 3 4
// index: vi tri cua phan tu(gia tri) trong mang va no bat dau tu so 0
// length: do dai cua mang, no dem tu 1
// truy xuat trong mang -> students1[index]
// console.log(students1[0]);
// console.log(students1[1]);
// Lay phan tu cuoi cung trong mang = do dai cua mang - 1
// console.log(students1[students1.length - 1]);

const students1 = ["evondev", "thai", "tuabn", "thanh", "trung", "evondev"];

// Phuong thuc hay dung cua mang nen biet
// length: tra ve do dai cua mang
console.log(students1.length);
// reverse -> dao nguoc gia tri trong mang
// console.log(students1.reverse());
// join -> noi cac phan tu trong mang thanh chuoi
console.log(students1.join());
// includes -> kiem trang mang do co chua phan tu nao do khong
console.log(students1.includes("evondev")); //true
console.log(students1.includes("abc")); //false
// indexOf -> tra ve vi tri cua phan tu tim thay dau tien
console.log(students1.indexOf("thai")); //1
// lastIndexOf -> tra ve vi tri cua phan tu tim thay cuoi cung
console.log(students1.lastIndexOf("evondev")); //5
// push -> them phan tu vao cuoi mang
console.log(students1.push("Lan Huong"));
console.log(students1);
// unshift -> them phan tu vao dau mang
console.log(students1.unshift("HTML"));
console.log(students1);
// pop -> xoa phan tu cuoi cung trong mang
console.log(students1.pop());
console.log(students1);
// shift -> xoa phan tu dau tien trong mang
console.log(students1.shift());
console.log(students1);
