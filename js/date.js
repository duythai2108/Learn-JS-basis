const now = new Date();
// build-in ojbect
console.log(now);
// Sat Nov 05 2022 16:10:49 GMT+0700 (Indochina Time)
// TImesoze:  GMT+0700 (Indochina Time)
// Second: 49
// Minute: 10
// Hour: 16
// Year: 2022
// Month: Nov
// Day : 05
// Day of the week: Sat
// Timestamp & Epoch time
// Unix time
// timestamp tinh ra ket qua la milisecond
console.log(now.getTime()); //print time-stamp
// console.log(new Date(0));
// new Date() -> In ra ngay gio hine tai
//  newDate(timestamp) -> dua vao timestamp de in ra ngay gio
// newDate(date string) ->
// newDate(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1667639951810));
console.log(new Date("Sat Nov 05 2022 16:20:17 GMT+0700 (Indochina Time)"));
console.log(new Date(2021, 6, 1, 23, 23, 23, 23));
//  Cac ham get trong Date
// getFullYear
const birthday = new Date(2000, 7, 21);
// in ra nam
// getMonth() : 0 ->11
console.log(birthday.getFullYear()); //2000
console.log(birthday.getMonth()); //7
// in ra ngay cua thang: 1 -> 31
console.log(birthday.getDate()); //21
// in ra thu cua tuan : 0 -> 6: 0 la chu nhat
console.log(birthday.getDay()); //T5
// in ra gio
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getMilliseconds());
// in ra timestamp
console.log(birthday.getTime());
// Cac ham set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(1993);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);

// UTC date
// in ra nam
// getMonth() : 0 ->11
console.log(birthday.getUTCFullYear()); //2000
console.log(birthday.getUTCMonth()); //7
// in ra ngay cua thang: 1 -> 31
console.log(birthday.getUTCDate()); //21
// in ra thu cua tuan : 0 -> 6: 0 la chu nhat
console.log(birthday.getUTCDay()); //T5
// in ra gio
console.log(birthday.getUTCHours());
console.log(birthday.getUTCMinutes());
console.log(birthday.getUTCMilliseconds());

//
console.log(now.toDateString()); //Sat Nov 05 2022
console.log(now.toTimeString()); //16:41:08 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); //11/5/2022, m/dd/yyyy
//5/11/2022
console.log(now.toLocaleDateString("vi-VI")); //5/11/2022
console.log(now.toISOString());

//05/11/2022
const myTime = new Date("Sat Nov 05 2022 16:50:16 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear(); //2022
const myMonth = myTime.getMonth() + 1; //11
const myDate = myTime.getDate(); //05
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
// setTimeout vs setInterval
// setTimeout(function () {
//   alert("call me after 3 secconds");
// }, 3000);
const timer = setInterval(function () {
  console.log("call me");
}, 1000);
clearInterval(timer);
