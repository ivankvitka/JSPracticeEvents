function smoothScroll(target, duration) {
  var target = document.getElementById(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var timingFunction = linear(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, timingFunction);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function linear(t, b, c, d) {
    return c * t / d + b;
  }
  requestAnimationFrame(animation);
}

var links = document.querySelectorAll('.menu__item  ');
links[0].addEventListener('click', function() {
  smoothScroll('task1', 500);
});

links[1].addEventListener('click', function() {
  smoothScroll('task2', 500);
});