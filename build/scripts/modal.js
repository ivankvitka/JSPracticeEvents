(function() {
  var menuBtn = document.querySelector('.js-modal-open-btn');
  var modal = document.querySelector('.js-modal');
  var closeBtn = modal.querySelector('.js-modal-close-btn');
  var background = modal.querySelector('.js-modal-background');

  menuBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', closeModal);
  background.addEventListener('click', closeModal);

  function showModal() {
    modal.classList.add('modal--visible');
  }

  function closeModal() {
    modal.classList.remove('modal--visible');
  }
})();