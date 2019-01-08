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
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    return currentSlide;
  }

  function showPreviousSlide() {
    if (currentSlide === 0) {
      currentSlide = imgArr.length - 1;
    } else {
      currentSlide--;
    }
    return currentSlide;
  }

  function changeSlideStyle(prev) {
    for (var i = 0; i < items.length; i++) {
      var image = items[i].querySelector('.slider__image');
      if (i === currentSlide) {
        items[i].style.zIndex = '2';
        image.style.borderRadius ='0';
        image.style.transform = 'scale(1)';
      } else if (i === prev){
        items[i].style.zIndex = '1';
        image.style.borderRadius ='0';
        image.style.transform = 'scale(1)';
      } else {
        items[i].style.zIndex = '0';
        image.style.borderRadius ='50%';
        image.style.transform = 'scale(0)';
      }
    }
  }

  function createGallery() {
    var slider = document.querySelector('.slider');
    var list = slider.querySelector('.slider__list');

    if (slider && list) {
      for (var i = 0; i < imgArr.length; i++) {
        var li = document.createElement('li');
        li.className = 'slider__item';
        var image = document.createElement('img');
        image.className = 'slider__image';
        image.setAttribute('src', 'images/' + imgArr[i].image);
        console.log(imgArr[i].image);
        image.setAttribute('alt', imgArr[i].alt);
        list.appendChild(li);
        li.appendChild(image);
      }
    } else {
      console.log('elements not found');
    }
  }

  createGallery();

  var items = document.querySelectorAll('.slider__item');

  if (items) {

    changeSlideStyle();
  } else {
    console.log('elements not found');
  }

  function slideLeft() {
    var prevSlide = currentSlide;
    showPreviousSlide();
    changeSlideStyle(prevSlide);
  }

  function slideRight() {
    var prevSlide = currentSlide;
    showNextSlide();
    changeSlideStyle(prevSlide);
  }

  var left = document.querySelector('.slider__switcher--left');
  var right = document.querySelector('.slider__switcher--right');

  if (left && right) {
    left.addEventListener('click', slideLeft);
    right.addEventListener('click', slideRight);
  } else {
    console.log('elements not found');
  }
}());