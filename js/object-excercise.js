//1. Viet 1 function kiem tra value co phai la object hay khong ?
//type ò value === "object"
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
console.log(isObject({})); //true -> plan object
//2. {a: 1, b: 2} -> {["a",1],["b",2]}
function objectToArray(object) {
  if (!isObject(object)) return;
  //   return Object.entries(object); cach 1
  // cach 2 su dung .keys tra ve 1 mang chua keys
  //   const value = Object.keys(object).map((key) => [key, object[key]]);
  //   return value;
  // cach 3
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) -> neu object chua key thi return ve true nguoc lai tra ve false
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));

//3. ({a:1,b:2},'b') -> {a:1}
function without(object, ...key) {
  const newObject = { ...object };
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
  //   return object;
}
console.log(without({ a: 1, b: 2 }, "b"));

// 4. So sanh 2 object co giong nhau hay khong
function isEqualObject(obj1, obj2) {
  // check key length of two object
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length) return false;
  //   check value object
  const result = objkey1.every((key) => obj1[key] == obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1 }, { a: 1 })); //true
