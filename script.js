const gradient = document.getElementById("gradient");
let angle = 0;

setInterval(() => {
  angle = (angle + 1) % 360;
  gradient.style.background = `linear-gradient(${angle}deg, #16161a, )`;
}, 50);

const object2 = document.getElementById("object2");

document.addEventListener("mousemove", (event) => {
  object2.style.left = `${event.pageX - 25}px`;
  object2.style.top = `${event.pageY - 25}px`;
});

const object3 = document.getElementById("object3");

document.addEventListener("mousemove", (event) => {
  object3.style.left = `${event.pageX - 25}px`;
  object3.style.top = `${event.pageY - 25}px`;
});

const colorChanger = document.getElementById("colorChanger");

function myFunction(){   
document.body.style.backgroundColor= "white";
document.getElementById("filter").style.opacity = .02;
document.getElementById('line1').style.color='rgb(255, 0, 255)';
document.getElementById('line3').style.color='rgb(255, 0, 255)';
document.getElementById('paragraph').style.color='rgb(255, 0, 255)';
}


window.onload = () => {
  // Your JavaScript code here
  const hamburgerButton = document.getElementById("hamburger-button");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  
  hamburgerButton.addEventListener("click", () => {
    modal.classList.add("modal-open");
    modal.classList.add("modal-animation");
  });
  
  closeButton.addEventListener("click", () => {
    modal.classList.remove("modal-open");
    modal.classList.add("modal-animation-out");
  });

  modal.addEventListener("transitionend", () => {
    modal.classList.remove("modal-animation-out");
  });
};




