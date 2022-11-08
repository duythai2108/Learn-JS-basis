// object literal
const objectLiteral = {}; //cach khai bao obj dc dung nhieu
// object contructor
const objectConstructor = new Object();

const student = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log("Hello");
  },
};

// 2 cach de truy xuat gia tri cua object
// 2.1 Dot notation .
console.log(student.name);
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);

// Thay doi gia tri cua object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student.hello = function () {
  console.log("Hello");
};
console.log(student);

// Cach xoa gia tri trong Object
delete student["last-name"];
console.log(student);

// For in trong Object
for (let key in student) {
  if (key === "name") {
    console.log("Hello name");
  }
  console.log(`${key}: ${student[key]}`);
}
//Object.key[object] -> tra ve 1 mang chua tat ca cac key cua object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.values[object] -> tra ve 1 mang chua tat ca cac gia tri cua object
const values = Object.values(student);
console.log(values);

// Object.entries(object) -> tra ve 1 mang nested gom co key va value [["name","evondev"], ["age",20]]
const entries = Object.entries(student);
console.log(entries);

// Object.assign()
const a = {
  firstName: "tuan",
};
const b = {
  lastName: "tran",
};
const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...b };
console.log(d);

// Object.frezze(object) -> Dong bang object khong cho chinh sua object ban dau
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);

// Object.seal(object) -> cho phep chinh sua key value nhung khong duoc them key value moi
const user = {
  userName: "evondev",
  school: {
    name: "Cao Thang",
    room: {
      name: "IT",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "Trang Duy";
// console.log(user);

const newUser = { ...user };
newUser.userName = "Tran Anh Tuan";
console.log(user);
console.log(newUser);

// object.assign
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// Clone nested object
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log("New user 3");
console.log(newUser3);

// * This keyword
// this no se de cap toi object gan nhat
const student2 = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
  fullname: {
    name: "Tran Anh Tuan",
  },
};
student2.hi();
// optional chaining
console.log(student2.fullname); //undefined
// console.log(student2.fullname.name); //undefined.name
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}
// student2.fullname?.name
console.log(student2.fullname?.name);

// Destructuring object
// const name = student2.name;
// const age = student2.age;
// const {name,age} = student2;
// Su dung destructuring
const { name, age, ...rest } = student2;
console.log(name, age, rest);

// Normal function
// function whatYourInfo(name, age, school) {
//   console.log(name, age, school);
// }

//Su dung object destructuring
// FUnction with object
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  name: "Evondev",
  age: 27,
  school: "Cao thang",
};
whatYourInfo(newObj);
// functino with object destructuring
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  name: "Tuan",
  age: 27,
  school: "Cao thang",
});
