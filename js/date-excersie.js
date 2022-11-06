//* 1 Viet chuong trinh nhap vao nam sinh va in ra so tuoi

//* 2 Viet chuong trinh dem nguoc thoi gian theo tung giay (countdown) dua vao thoi gian dau vao.Vi du thoi gian lam bai la 30p neu chay ve 0 thi thong bao het thoi gian

// * 3 Viet chuong trinh co ten la timeSince, dau vao la thoi gian va tinh thoi gian dau vao so vowis thoi gian hien tai, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online "3 phút trước", "3 ngày trước","3 tuần trước", "3 tháng trước","3 nam trước".....

//*1
// function getAge(year = 0) {
//   if (typeof year !== "number") return 0;
//   //currentYear - year
//   const now = new Date();
//   const currentYear = now.getFullYear();
//   return currentYear - year;
// }
// const yourAge = getAge(2000);
// console.log(`Tuoi cua ban la ${yourAge} tuoi`);

//*2
// function countdown(minute = 1) {
//   let seconds = minute * 60;
//   let counter = 0;
//   const timer = setInterval(function () {
//     counter = counter + 1;
//     console.log(counter);
//     if (counter === seconds) {
//       clearInterval(timer);
//       console.log("Your time is end");
//     }
//   }, 1000);
// }
// countdown(1);

//* 3
function timeSince(date) {
  // current Time - time
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); //in ra so giay
  let timer = seconds / 31536000;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} nam truoc`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} thang truoc`);
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuan truoc`);
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngay truoc`);
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} gio truoc`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phut truoc`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giay truoc`);
  }
  //   1 nam = 365 * 24 * 60 * 60s = 31536000
  // 1 thang = 31 * 24 * 60 * 60 = 2678400
  // 1 tuan = 7 * 24 * 60 * 60 = 604800
  // 1 ngay = 24 * 60 * 60 = 86400
  //1 gio = 60 * 60 = 3600
  // 1 phut = 60
}
timeSince("Sat Nov 05 2022 21:57:22 GMT+0700 (Indochina Time)");
