(function() {
  var tabs = document.querySelectorAll('.js-tabs-wrapper-title');
  var descriptions = document.querySelectorAll('.js-tabs-wrapper-description');
  tabs.indexOf = [].indexOf;


  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('title-current');
        descriptions[j].classList.remove('description-current');
      }
      this.classList.add('title-current');
      var position = tabs.indexOf(this);
      descriptions[position].classList.add('description-current')
    })
  }
})();