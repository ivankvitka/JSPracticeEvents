(function() {
  var menuLinks = document.querySelectorAll('.menu__item');

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', menuLinkClick);
  }

  function menuLinkClick(event) {
    smoothScroll(event);
  }

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute('href');
    var targetPosition = document.querySelector(targetId).offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000;
    var start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) {
        start = timestamp;
      }
      var progress = timestamp - start;
      window.scrollTo(0, distance * (progress / duration) + startPosition);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  }
})();