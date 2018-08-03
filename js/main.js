var buttonToTop = document.querySelector(".btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.visibility = "visible";
    buttonToTop.style.opacity = "0.7";
  }
  else
  {
    buttonToTop.style.visibility = "hidden";
    buttonToTop.style.opacity = "0";
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

// Scroll to a certain element
function scrollToElement() {
  document.querySelector(".section-tours").scrollIntoView({
  behavior: 'smooth'
  });
}
