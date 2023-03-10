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
    document.getElementById('line2').style.color='rgb(0, 255, 166)';
    document.getElementById('line1').style.color='white';
    document.getElementById('line3').style.color='white';
    document.getElementById('paragraph').style.color='white';
    document.getElementById('modal').style.backgroundColor='rgba(50, 48, 69, 0.994)';
    document.getElementById('tags-cloud').style.color='rgb(0, 255, 166)';
    document.getElementById('wannaTalk').style.color='white';
    document.getElementById('overlayArrow2').style.color='rgb(0, 255, 166)';
    document.getElementById('overlayArrow1').style.color='rgb(0, 255, 166)';
    document.getElementById('overlayTitle1').style.color='rgb(0, 255, 166)';
    document.getElementById('overlayTitle2').style.color='rgb(0, 255, 166)';
    document.getElementById('overlayArrow3').style.color='rgb(0, 255, 166)';
    document.getElementById('overlayTitle3').style.color='rgb(0, 255, 166)';
    document.getElementById('ViewMore1').style.color='rgb(0, 255, 166)';
    document.getElementById('ViewMore2').style.color='rgb(0, 255, 166)';
    document.getElementById('footer-name').style.color='white';
    document.getElementById('title1').style.color='rgb(0, 255, 166)';
    document.getElementById('title2').style.color='rgb(0, 255, 166)';
    document.getElementById('contact').style.color='rgb(0, 255, 166)';
    document.getElementById('modalHom').style.color='rgb(0, 255, 166)';
    document.getElementById('modalAbo').style.color='rgb(0, 255, 166)';
    document.getElementById('modalPro').style.color='rgb(0, 255, 166)';
    document.getElementById('modalCon').style.color='rgb(0, 255, 166)';
    document.getElementById('logo').style.color='rgb(0, 255, 166)';
    document.getElementById('hamburger-button').style.color='rgb(0, 255, 166)';
    document.getElementById('name').style.color='rgb(0, 255, 166)';
    document.getElementById('twitter').style.color='rgb(0, 255, 166)';
    document.getElementById('gitHub').style.color='rgb(0, 255, 166)';
    document.getElementById('close-button').style.color='rgb(0, 255, 166)';
    document.getElementById('logo-modal').style.color='rgb(0, 255, 166)';
    document.getElementById('nameModal').style.color='rgb(0, 255, 166)';
    document.getElementById('twitterModal').style.color='rgb(0, 255, 166)';
    document.getElementById('gitHubModal').style.color='rgb(0, 255, 166)';
  }
}

function Light(){
  localStorage.setItem('activeButton', 'Light');
  localStorage.setItem('Light', 'true');
  localStorage.setItem('Dark', 'false');
  if(localStorage.getItem('Light') === 'true'){
    document.body.style.backgroundColor= "#CFD8DC";
    document.getElementById("filter").style.opacity = .02;
    document.getElementById('line1').style.color='black';
    document.getElementById('line3').style.color='black';
    document.getElementById('line2').style.color='rgb(255, 0, 242)';
    document.getElementById('title1').style.color='rgb(255, 0, 242)';
    document.getElementById('title2').style.color='rgb(255, 0, 242)';
    document.getElementById('tags-cloud').style.color='rgb(255, 0, 242)';
    document.getElementById('paragraph').style.color='black';
    document.getElementById('contact').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayArrow2').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayArrow1').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayTitle1').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayTitle2').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayArrow3').style.color='rgb(255, 0, 242)';
    document.getElementById('overlayTitle3').style.color='rgb(255, 0, 242)';
    document.getElementById('modalHom').style.color='rgb(255, 0, 242)';
    document.getElementById('modalAbo').style.color='rgb(255, 0, 242)';
    document.getElementById('modalPro').style.color='rgb(255, 0, 242)';
    document.getElementById('modalCon').style.color='rgb(255, 0, 242)';
    document.getElementById('ViewMore1').style.color='rgb(255, 0, 242)';
    document.getElementById('ViewMore2').style.color='rgb(255, 0, 242)';
    document.getElementById('wannaTalk').style.color='black';
    document.getElementById('logo').style.color='rgb(255, 0, 242)';
    document.getElementById('hamburger-button').style.color='rgb(255, 0, 242)';
    document.getElementById('footer-name').style.color='black';
    document.getElementById('name').style.color='rgb(255, 0, 242)';
    document.getElementById('twitter').style.color='rgb(255, 0, 242)';
    document.getElementById('gitHub').style.color='rgb(255, 0, 242)';
    document.getElementById('close-button').style.color='rgb(255, 0, 242)';
    document.getElementById('logo-modal').style.color='rgb(255, 0, 242)';
    document.getElementById('nameModal').style.color='rgb(255, 0, 242)';
    document.getElementById('twitterModal').style.color='rgb(255, 0, 242)';
    document.getElementById('gitHubModal').style.color='rgb(255, 0, 242)';
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




