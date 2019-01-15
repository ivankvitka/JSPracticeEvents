(function() {
  var menuBtn = document.querySelector('.js-modal-open-btn');
  var modal = document.querySelector('.js-modal');
  var modalWindow = modal.querySelector('.js-modal-window');
  var closeBtn = modal.querySelector('.js-modal-close-btn');
  var background = modal.querySelector('.js-modal-background');
  var modalTitle = modal.querySelector('.js-modal-title');
  var modalDescription = modal.querySelector('.js-modal-description');

  menuBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', closeModal);
  background.addEventListener('click', closeModal);

  function showModal() {
    modal.classList.add('modal--visible');
    modalWindow.classList.add('modal__window--visible');
    modalTitle.classList.add('modal__title--visible');
    modalDescription.classList.add('modal__description--visible');
    closeBtn.classList.add('modal__title--visible');
  }

  function closeModal() {
    modal.classList.remove('modal--visible');
    modalWindow.classList.remove('modal__window--visible');
    modalTitle.classList.remove('modal__title--visible');
    modalDescription.classList.remove('modal__description--visible');
    closeBtn.classList.remove('modal__title--visible');
  }

})();