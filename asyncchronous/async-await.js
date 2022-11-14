function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
// function expression
async function run() {
  console.log("starting");
  await wait(2000);
  console.log("runing");
  await wait(2000);
  console.log("ending");
}
// run();
// arrow function
const fn = async () => {};
const student = {
  fullname: async function () {},
  async calcAge() {},
  yearly: async () => {},
};

function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  //   console.log(timer1);
  const timer2 = makeTimer(2000, "second time");
  const timers = await Promise.all([timer1, timer2]);
  console.log(timers);
  //   console.log(timer2);
  // const timer3 = makeTimer(3000, "third time");
}
// allTimer();

// try-catch
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
// cach 1
// async function go() {
//   try {
//     const dev1 = await isFrontendDev(["css"]);
//     console.log(dev1);
//   } catch (error) {
//     console.log(error);
//   }
// }
// go();
// cach 2
function handleError(err) {
  console.log(err);
}
async function go2() {
  const dev1 = await isFrontendDev(["css"]);
  console.log(dev1);
  return dev1;
}

go2().then().catch(handleError);
