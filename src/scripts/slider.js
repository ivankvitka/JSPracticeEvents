;(function() {
  var imgArr = [{image: 'desk.jpg', alt: 'Car'}, {image: 'turtle.jpg', alt: 'Apple'}];
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

  var items = document.querySelectorAll('.slider__item');

  if (items) {
    for (i = 0; i < items.length; i++) {
      if (i === currentSlide) {
        items[i].style.opacity = '1';
      } else {
        items[i].style.opacity = '0';
      }
    }
  } else {
    console.log('elements not found');
  }

  var left = document.querySelector('.slider__switcher--left');
  var right = document.querySelector('.slider__switcher--right');

  if (left && right) {
    left.onclick = function() {
      showPreviousSlide();
      for (i = 0; i < items.length; i++) {
        if (i === currentSlide) {
          items[i].style.opacity = '1';
        } else {
          items[i].style.opacity = '0';
        }
      }
    };

    right.onclick = function() {
      showNextSlide();
      for (i = 0; i < items.length; i++) {
        if (i === currentSlide) {
          items[i].style.opacity = '1';
        } else {
          items[i].style.opacity = '0';
        }
      }
    }
  } else {
    console.log('elements not found');
  }

}());