var loginLink = document.querySelector(".button-contacts");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".close-cross");
var loginForm = loginPopup.querySelector(".login-form");
var loginLogin = loginPopup.querySelector(".login-icon-name");
var loginEmail = loginPopup.querySelector(".login-mail-user");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  if (storage) {
    loginLogin.value = storage;
    loginEmail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});


loginForm.addEventListener("submit", function(evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  };
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});
//Слайдер!!
var sliderMenuButtons = document.getElementsByClassName("slider-focus"); //создаем коллекцию кнопок слайдера
var sliderSlides = document.getElementsByClassName("slider-item"); //создаем коллекцию слайдов c текстовым описание
var sliderImages = document.getElementsByClassName("slider-item-img"); //создаем коллекцию картинок слайдов

sliderMenuButtons[0].addEventListener("click", function(evt) {
  for (var index = 0; index < 3; index++) {
    sliderMenuButtons[index].classList.remove("current");
    sliderSlides[index].classList.remove("slide-current");
    sliderImages[index].classList.remove("slide-current");
  };
  sliderMenuButtons[0].classList.add("current"); //добавим первой кнопке состояние нажатая путем добавления класса current
  sliderSlides[0].classList.add("slide-current");//добавим первому слайдеру с текстом состояние нажатая путем добавления класса
  sliderImages[0].classList.add("slide-current"); //аналогично отображаем картинку
});

sliderMenuButtons[1].addEventListener("click", function(evt) {
  for (var index = 0; index < 3; index++) {
    sliderMenuButtons[index].classList.remove("current");
    sliderSlides[index].classList.remove("slide-current");
    sliderImages[index].classList.remove("slide-current");
  };
  sliderMenuButtons[1].classList.add("current"); //добавим первой кнопке состояние нажатая путем добавления класса current
  sliderSlides[1].classList.add("slide-current");//добавим первому слайдеру с текстом состояние нажатая путем добавления класса
  sliderImages[1].classList.add("slide-current"); //аналогично отображаем картинку
});

sliderMenuButtons[2].addEventListener("click", function(evt) {
  for (var index = 0; index < 3; index++) {
    sliderMenuButtons[index].classList.remove("current");
    sliderSlides[index].classList.remove("slide-current");
    sliderImages[index].classList.remove("slide-current");
  };
  sliderMenuButtons[2].classList.add("current"); //добавим первой кнопке состояние нажатая путем добавления класса current
  sliderSlides[2].classList.add("slide-current");//добавим первому слайдеру с текстом состояние нажатая путем добавления класса
  sliderImages[2].classList.add("slide-current"); //аналогично отображаем картинку
});
