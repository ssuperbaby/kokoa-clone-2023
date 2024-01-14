const time = document.querySelector("#time");
const today = document.querySelector("#totay");

function now_time() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const year = now.getFullYear();
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  time.innerHTML = `${hour}:${minute}:${seconds}`;
  today.innerHTML = `${year}-${month}-${date}`;
}

setInterval(now_time, 1000);
