(function() {
  var menuBtn = document.querySelector('.js-modal-open-btn');
  var modal = document.querySelector('.modal');
  var modalWindow = modal.querySelector('.modal__window');
  var closeBtn = modal.querySelector('.modal__close-btn');
  var background = modal.querySelector('.modal__background');
  var modalTitle = modal.querySelector('.modal__title');
  var modalDescription = modal.querySelector('.modal__description');

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

  menuBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', closeModal);
  background.addEventListener('click', closeModal);
})();