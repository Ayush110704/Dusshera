function showMessage() {
  let msg = document.getElementById("greet");
  msg.classList.add("show");

  // Heart rain for few seconds
  let duration = 4000; // 4 sec
  let interval = setInterval(() => {
    createHeart();
  }, 200);

  setTimeout(() => {
    clearInterval(interval);
  }, duration);
}

function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
