var title = document.querySelector("#logo");
var titleLink = document.querySelector("#logo a");
var topColor = document.querySelector(".topholder");
var buttonToTop = document.querySelector("#myBtn");
var mudra = document.querySelector(".mudra");
var message = document.querySelector(".splash_message");

var selectedLink;

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //document.getElementById("myBtn").style.display = "block";
    buttonToTop.style.visibility = "visible";
    buttonToTop.style.opacity = "0.7";
    title.style.border = "1px solid #4a4a4a";
    title.style.opacity = "0.7";
    titleLink.style.color = "#4a4a4a";
    topColor.style.background = "white";
    message.style.opacity = "0.5";
  }
  else
  {
    //document.getElementById("myBtn").style.display = "none";
    buttonToTop.style.opacity = "0";
    title.style.border = "1px solid white";
    title.style.opacity = "0.7";
    titleLink.style.color = "white";
    topColor.style.background = "rgba(0, 0, 0, 0)";
    message.style.opacity = "1";
  }

  if(document.body.scrollTop > 200 || document.documentElement.scroll > 200) {
    message.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// User selects a link
function linkSelection(choice) {
  selectedLink = choice;
}

// Scroll to a certain element
function scrollToElement(elementOfChoice) {
  document.querySelector(elementOfChoice).scrollIntoView({
  behavior: 'smooth'
  });
}
