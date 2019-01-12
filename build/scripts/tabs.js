(function() {
  var tabs = document.querySelectorAll('.tabs-wrapper__title');
  var descriptions = document.querySelectorAll('.tabs-wrapper__description');
  tabs.indexOf = [].indexOf;


  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('tabs-wrapper__title--current');
        descriptions[j].classList.remove('tabs-wrapper__description--current');
      }
      this.classList.add('tabs-wrapper__title--current');
      var position = tabs.indexOf(this);
      descriptions[position].classList.add('tabs-wrapper__description--current')
    })
  }
})();