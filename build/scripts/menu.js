(function menu() {
  var menu = document.querySelector('.js-menu');
  var closeBtn = document.querySelector('.js-menu-close-btn');
  var openBtn = document.querySelector('.js-menu-open-btn');

  closeBtn.addEventListener('click', close);
  openBtn.addEventListener('click', open);

  function close() {
    menu.style.transform = 'translateX(-100%)';
  }

  function open() {
    menu.style.transform = 'translateX(0)';
  }
}());