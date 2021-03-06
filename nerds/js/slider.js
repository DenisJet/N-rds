const slide1 = document.querySelector('.slider-item:nth-child(1)');
const slide2 = document.querySelector('.slider-item:nth-child(2)');
const slide3 = document.querySelector('.slider-item:nth-child(3)');
const slideButton1 = document.querySelector('.slider-controls-1');
const slideButton2 = document.querySelector('.slider-controls-2');
const slideButton3 = document.querySelector('.slider-controls-3');
const slider = document.querySelector('.slider');

slideButton1.addEventListener('click', function(evt) {
    evt.preventDefault();
    slide1.classList.add('slide-current');
    slide2.classList.remove('slide-current');
    slide3.classList.remove('slide-current');
    slideButton1.classList.add('current');
    slideButton2.classList.remove('current');
    slideButton3.classList.remove('current');
    slider.classList.add('slider-wrapper-1');
    slider.classList.remove('slider-wrapper-2');
    slider.classList.remove('slider-wrapper-3');
});

slideButton2.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide1.classList.remove('slide-current');
  slide2.classList.add('slide-current');
  slide3.classList.remove('slide-current');
  slideButton1.classList.remove('current');
  slideButton2.classList.add('current');
  slideButton3.classList.remove('current');
  slider.classList.remove('slider-wrapper-1');
  slider.classList.add('slider-wrapper-2');
  slider.classList.remove('slider-wrapper-3');
});

slideButton3.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide1.classList.remove('slide-current');
  slide2.classList.remove('slide-current');
  slide3.classList.add('slide-current');
  slideButton1.classList.remove('current');
  slideButton2.classList.remove('current');
  slideButton3.classList.add('current');
  slider.classList.remove('slider-wrapper-1');
  slider.classList.remove('slider-wrapper-2');
  slider.classList.add('slider-wrapper-3');
});
