/*objects*/
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
/**/ 
 

/*light and dark mode*/



const colorChanger = document.getElementById("colorChanger");


function Dark(){
  localStorage.setItem('activeButton', 'Dark');
  localStorage.setItem('Light', 'false');
  localStorage.setItem('Dark', 'true');
  if(localStorage.getItem('Dark') === 'true'){
  document.body.style.backgroundColor= "#1c1c2c";
  document.getElementById("filter").style.opacity = .55;
  document.getElementById('line2').style.color='aqua';
  document.getElementById('line1').style.color='white';
  document.getElementById('line3').style.color='white';
  document.getElementById('paragraph').style.color='white';
  document.getElementById('modal').style.backgroundColor='rgba(50, 48, 69, 0.994)';
  document.getElementById('wannaTalk').style.color='white';
  document.getElementById('overlayArrow2').style.color='aqua';
  document.getElementById('overlayArrow1').style.color='aqua';
  document.getElementById('overlayTitle1').style.color='aqua';
  document.getElementById('overlayTitle2').style.color='aqua';
  document.getElementById('ViewMore1').style.color='aqua';
  document.getElementById('ViewMore2').style.color='aqua';
  document.getElementById('footer-name').style.color='white';
  document.getElementById('title1').style.color='aqua';
  document.getElementById('title2').style.color='aqua';
  document.getElementById('contact').style.color='aqua';
  document.getElementById('modalHom').style.color='aqua';
  document.getElementById('modalAbo').style.color='aqua';
  document.getElementById('modalPro').style.color='aqua';
  document.getElementById('modalCon').style.color='aqua';
  }
}

function Light(){
  localStorage.setItem('activeButton', 'Light');
  localStorage.setItem('Light', 'true');
  localStorage.setItem('Dark', 'false');
  if(localStorage.getItem('Light') === 'true'){
    document.body.style.backgroundColor= "rgb(216, 216, 216)";
    document.getElementById("filter").style.opacity = .02;
    document.getElementById('line1').style.color='black';
    document.getElementById('line3').style.color='black';
    document.getElementById('line2').style.color='white';
    document.getElementById('paragraph').style.color='black';
    document.getElementById('modal').style.backgroundColor='#dfdfdf';
    document.getElementById('modal').style.color="white";
    document.getElementById('wannaTalk').style.color='white';
    document.getElementById('footer-name').style.color='white';
    document.getElementById('title1').style.color='white';
    document.getElementById('title2').style.color='white';
    document.getElementById('contact').style.color='black';
    document.getElementById('overlayTitle1').style.color='black';
    document.getElementById('overlayTitle2').style.color='black';
    document.getElementById('overlayArrow2').style.color='black';
    document.getElementById('overlayArrow1').style.color='black';
    document.getElementById('ViewMore1').style.color='white';
    document.getElementById('ViewMore2').style.color='white';
    document.getElementById('modalHom').style.color='black';
    document.getElementById('modalAbo').style.color='black';
    document.getElementById('modalPro').style.color='black';
    document.getElementById('modalCon').style.color='black';
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const activeButton = localStorage.getItem('activeButton');
  if (activeButton === 'Dark') {
    Dark();
  } else if (activeButton === 'Light') {
    Light();
  }
});
  
/**/ 

/*modal*/
window.onload = () => {
  // Your JavaScript code here
  const hamburgerButton = document.getElementById("hamburger-button");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  const animatedText = document.getElementById("animated-text");
  
  hamburgerButton.addEventListener("click", () => {
    modal.classList.add("modal-open");
    modal.classList.add("modal-animation");
    //animatedText.classList.add("slide-in");
  });
  
  closeButton.addEventListener("click", () => {
    modal.classList.remove("modal-open");
    modal.classList.add("modal-animation-out");
  });

  modal.addEventListener("transitionend", () => {
    modal.classList.remove("modal-animation-out");
  });
};
/**/

/*project videos*/
var video = document.getElementById("myVideo");

video.addEventListener("ended", function() {
    video.currentTime = 0;  
    video.play();
}
, false);
/**/




