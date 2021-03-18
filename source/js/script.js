var nav = document.querySelector(".main-nav");
var menuToggler = document.querySelector(".main-nav__toggler");
var buyButtons = document.querySelectorAll(".price__buy-tour");
var buyPopup = document.querySelector(".buy-popup");
var closeBuyPopup = document.querySelector(".buy-popup__close");
var inputTel = document.querySelector(".buy-popup__input--tel");
var overlayBuyPopup = document.querySelector(".overlay");

window.onload = function() {
  nav.classList.remove("no-js");
  nav.classList.remove("main-nav--opened");
  nav.classList.add("main-nav--closed");
};

menuToggler.addEventListener("click", function(evt) {
  if (nav.classList.contains("main-nav--opened")){
    nav.classList.add("main-nav--closed");
    nav.classList.remove("main-nav--opened");
  } else {
    nav.classList.add("main-nav--opened");
    nav.classList.remove("main-nav--closed");
  }
});

var showBuyPopup = function() {
  buyButtons.forEach(function(button){
    button.addEventListener("click", function(evt) {
      buyPopup.style.display = "flex";
      overlayBuyPopup.style.display = "block";
      inputTel.focus();
    });
  });

  closeBuyPopup.addEventListener("click", function(evt) {
    buyPopup.style.display = "none";
    overlayBuyPopup.style.display = "none";
  });

  overlayBuyPopup.addEventListener("click", function(evt) {
    buyPopup.style.display = "none";
    overlayBuyPopup.style.display = "none";
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      buyPopup.style.display = "none";
      overlayBuyPopup.style.display = "none";
    }
  });
};

showBuyPopup();
