
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
