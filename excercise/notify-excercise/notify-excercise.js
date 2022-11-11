// Viet 1 function tao ra thong bao
function createNotification(title = "Welcome to notification") {
  const template = ` <div class="noti">
      <img
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt=""
        class="noti-image"
      />
      <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">Lorem, ipsum dolor sit amet consec</p>
      </div>
    </div>`;
  // insertAdjacentHTML
  document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = [
  "Welcome to javascript course",
  "Today is a good day",
  "My name is Duy Thai",
  "I am front end developer",
];
let lastTitle;
// createNotification();
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  //   lay ra random title trong mang randomData
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 4000);
