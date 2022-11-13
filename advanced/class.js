// ES6
// Constructor/prototype way
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
};
const evondev = new Person("Evondev");
evondev.getName();

// Class
class Person2 {
  constructor(name) {
    this.name = name;
  }
  //   getName() {
  //     return this.name;
  //   }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
  //   setName(newName) {
  //     this.name = newName;
  //   }
}
// const tuan = new Person2("tuan");
// console.log(tuan.name);
// tuan.setName("Thai");
// console.log(tuan.getName());
// tuan.name = "Thai";
// console.log(tuan.name);
// Class expression
let Student = class {
  constructor(_name) {
    this.name = _name;
  }
  get name() {
    return this.name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("thai");
console.log(evon._name);
function company(aClass) {
  return new aClass();
}
let hello = company(
  class {
    sayHello() {
      console.log("Hello");
    }
  }
);
hello.sayHello();
// Static method
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles);

// static properties
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}
const pencil = new Item("Pencil");
const laptop = new Item("laptop");
console.log(Item.getCount());

// Super and extends
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`walking on ${this.legs} legs`);
  }
}
class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("I can flying");
  }
}
let bird = new Bird(2);
bird.fly();
bird.walking();
