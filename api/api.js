// API la gi?
// Application Programing Interface
// JSON.parse(date)
// https://api.github.com/users/duythai2108
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
// fetch

async function displayUser(username) {
  userEl.textContent = "Loading...";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = `${data.login}`;
  console.log("displayUser - data", data);
}
function handleError() {
  console.log("SOmething wrong with your api");
  userEl.textContent = "No data found";
}
// console.log(displayUser("duythai2108"));
displayUser("duythai2108").catch(handleError);

// cors