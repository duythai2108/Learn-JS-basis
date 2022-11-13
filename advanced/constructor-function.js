// Declaration, new, this ,method, caution
let student = {
  name: "DuyThai",
  age: 20,
};
// COnstructor function Person Student
function Student(name, age) {
  // this = {}
  // add propertise to this
  this.name = name;
  this.age = age;

  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("john", 40);
console.log(student2);
console.log(student2.getName());

// Prototype

// Caution phai dung tu khoa new khi dung constructor
