const gradient = document.getElementById("gradient");
let angle = 0;

setInterval(() => {
  angle = (angle + 1) % 360;
  gradient.style.background = `linear-gradient(${angle}deg, #ff0000, #ffff00)`;
}, 50);

const object = document.getElementById("object");

document.addEventListener("mousemove", (event) => {
  object.style.left = `${event.clientX - 25}px`;
  object.style.top = `${event.clientY - 25}px`;
});

const object2 = document.getElementById("object2");

document.addEventListener("mousemove", (event) => {
  object2.style.left = `${event.clientX - 25}px`;
  object2.style.top = `${event.clientY - 25}px`;
});

