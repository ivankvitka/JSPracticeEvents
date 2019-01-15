;(function() {
  var imgArr = [{image: 'desk.jpg', alt: 'hand on desk'},
    {image: 'turtle.jpg', alt: 'small turtle'},
    {image: 'eiffel_tower.jpg', alt: 'eiffel tower'},
    {image: 'mountains.jpg', alt: 'violet mountains'},
    {image: 'winter.jpg', alt: 'winter house'}
  ];
  var currentSlide = 0;

  function showNextSlide() {
    if (currentSlide === imgArr.length - 1) {
      return currentSlide;
    } else {
      currentSlide++;
    }
    return currentSlide;
  }

  function showPreviousSlide() {
    if (currentSlide === 0) {
      return currentSlide;
    } else {
      currentSlide--;
    }
    return currentSlide;
  }

  function changeSlideStyle() {
    for (var i = 0; i < items.length; i++) {
      items[i].style.zIndex = '' + i;
    }
  }

  function createGallery() {
    var slider = document.querySelector('.js-slider');
    var list = slider.querySelector('.js-slider-list');

    if (slider && list) {
      for (var i = 0; i < imgArr.length; i++) {
        var li = document.createElement('li');
        li.classList.add('slider__item', 'js-slider-item');
        var image = document.createElement('img');
        image.className = 'slider__image';
        image.setAttribute('src', 'images/' + imgArr[i].image);
        image.setAttribute('alt', imgArr[i].alt);
        list.appendChild(li);
        li.appendChild(image);
      }
    } else {
      console.log('elements not found');
    }
  }

  createGallery();

  var items = document.querySelectorAll('.js-slider-item');

  if (items) {
    changeSlideStyle();
    items[currentSlide].classList.add('slider__item--current');
  } else {
    console.log('elements not found');
  }

  function slideLeft() {
    if (currentSlide !== 0) {
      items[currentSlide].classList.remove('slider__item--current');
    }
    showPreviousSlide();
  }

  function slideRight() {
    showNextSlide();
    items[currentSlide].classList.add('slider__item--current');
  }

  var left = document.querySelector('.js-slider-switcher-left');
  var right = document.querySelector('.js-slider-switcher-right');

  if (left && right) {
    left.addEventListener('click', slideLeft);
    right.addEventListener('click', slideRight);
  } else {
    console.log('elements not found');
  }
}());