console.log("-----------------array.slice--------");
// Slice: tao ra mot mang coppy cua mang ban dau
const animals = ["tigers", "lion", "horse", "elephant"];
// slice(): Tao ra mang moi y het mang ban dau
const animals2 = animals.slice();
console.log(animals2);
// slice(start), start -> vi tri index o trong mang
const animals3 = animals.slice(1);
console.log(animals3);
// slice(start,end), start -> vi tri index o trong mang, end la vi tri ket thuc
// no se sao chep tu phan tu start toi phan tu end -1
const animals4 = animals.slice(1, 3);
console.log(animals4);
const animals5 = animals.slice(-3);
console.log(animals5);

// * Splice
console.log("-----------------array.splice--------");
// no se xoa phan tu trong mang hoac thay the phan tu trong mang
const pet = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pet2 = pet.splice(2);
// console.log(pet2);
// splice(start, deleteCount): deleteCount la so luong phan tu muon xoa hoac thay the
// const pet3 = pet.splice(0, 1);
// console.log(pet);
// splice(start, deleteCount, item1, item2,itemN): deleteCount la so luong phan tu muon xoa hoac thay the
const pet34 = pet.splice(0, 1, "dinasour", "pig", false);
console.log(pet);

//* Sort
console.log("-----------------array.sort--------");
// Sap xep cac phan tu trong mang theo chuan unicode-16
const random = [1, 1000, 9999, 10, 5];
console.log(random.sort());
//sort((function(a, b)))
//function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; //sap xep theo tang dan
  if (a < b) return -1; //sap xep theo giam dan
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random2);
console.log(random3);
//* Find
console.log("-----------------array.find--------");
// No se tra ve phan tu tim thay dau tien trong mang thoa dieu kien nao do
const number = [1, 9999, 1000000, 5, 09];
const findYourNumber = number.find((element) => element > 10);
console.log(findYourNumber); //9999
console.log("-----------------array.findIndex--------");
// No se tra ve vi tri index tim thay dau tien trong mang thoa dieu kien nao do
const findYourIndex = number.findIndex((element) => element > 10);
//neu khong tim thay ket qua la -1
console.log(findYourIndex); //1

//Sort bo sung

const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4);
//* Map
console.log("-----------------array.map--------");
// Duyet qua tung phan tu trong mang va tra ra mot mang moi ma khong thay doi mang ban dau
const listNumber = [1, 2, 3, 4, 5];
//tra ra mot mang moi ma cac so trong mang cu nhan 2
// .map(callback(values, index, array))
const listNumberDouble = listNumber.map((value, index, array) => value * 2);
console.log(listNumberDouble);
//* forEach
console.log("-----------------array.forEach--------");
const listNumberTriple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTriple);
// Hay cho biet su khac nhau giua forEach va map ?
// map return dc, map ko return
// foreach khong dung duoc

//* filter
console.log("-----------------array.filter--------");
// Dung de filter(sang loc) cac phan tu trong mang thoa dieu kien nao do
// const listNumber = [1, 2, 3, 4, 5];
const greaterThanThree = listNumber.filter((value) => value > 3);
console.log(listNumber);
console.log(greaterThanThree);
//* some & every
console.log("-----------------array.some--------");
// some: tra ve true khi thoa 1 dieu kien va nguoc lai tra ve false khi khong thoa dieu kien nao ca
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber); //true
console.log("-----------------array.every--------");
// Chi tra ve true khi tat ca dieu kien dieu dung, nguoc lai chi can 1 cai sai la no se return false
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber); //false

//true or false
//* reduce
console.log("-----------------array.reduce--------");
// Gom cac phan tu trong mang ve 1 gia tri
//.reduce((a,b) => {},initialize value)
const totalNumber = listNumber.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);
console.log(totalNumber);
