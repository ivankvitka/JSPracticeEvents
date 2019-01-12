(function menu() {
  var closeBtn = document.querySelector('.menu__close-btn');
  var openBtn = document.querySelector('.js-menu-open-btn');
  var menu = document.querySelector('.menu');
  if (menu) {
    function close() {
      menu.style.transform = 'translateX(-100%)';
    }

    function open() {
      menu.style.transform = 'translateX(0)';
    }
  } else {
    console.log('element not found');
  }
  if (openBtn && closeBtn) {
    closeBtn.addEventListener('click', close);
    openBtn.addEventListener('click', open);
  } else {
    console.log('element not found');
  }
}());