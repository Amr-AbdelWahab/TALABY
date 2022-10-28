
//! Login Form
let logInAnchor = document.getElementById('login');
let overlayLogin = document.getElementById('overlay-login');
let btnClosePopUpLogin = document.getElementById('closePopUpLogin');

logInAnchor.addEventListener('click', openPopUpLogin);

//Open PopUp login Window
function openPopUpLogin() {
  overlayLogin.classList.remove("disNon");
  setTimeout(scaleUp, 50);
  function scaleUp() {
    overlayLogin.classList.add("open");
  }
}
//Close PopUp  login Window
btnClosePopUpLogin.addEventListener("click", closePopUpLogin);

function closePopUpLogin() {
  overlayLogin.classList.remove("open");
  setTimeout(scaleDn, 200);
  function scaleDn() {
    overlayLogin.classList.add("disNon");
  }
}

//! LogUp Form
let logUpAnchor = document.getElementById('logUp');
let overlayLogUp = document.getElementById('overlay-logUp');
let btnClosePopUpLogUp = document.getElementById('closePopUpLogUp');

logUpAnchor.addEventListener('click', openPopUpLogUp);

//Open PopUp logUp Window
function openPopUpLogUp() {
  overlayLogUp.classList.remove("disNon");
  setTimeout(scaleUp, 50);
  function scaleUp() {
    overlayLogUp.classList.add("open");
  }
}
//Close PopUp  logUp Window
btnClosePopUpLogUp.addEventListener("click", closePopUpLogUp);

function closePopUpLogUp() {
  overlayLogUp.classList.remove("open");
  setTimeout(scaleDn, 200);
  function scaleDn() {
    overlayLogUp.classList.add("disNon");
  }
}