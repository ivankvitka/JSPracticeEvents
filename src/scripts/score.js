(function() {
  var tBody = document.querySelector('tbody');
  var rows = tBody.querySelectorAll('tr');
  var rowsOnPage = +document.querySelector('.show__input').value;
  var amountOfPages = Math.trunc(rows.length / rowsOnPage);

  var pagerPagesList = document.querySelectorAll('.pager__page');
  pagerPagesList.indexOf = [].indexOf;

  var tripleDots = document.querySelectorAll('.js-triple-dots');
  var currentPage = 0;

  for (var i = 0; i < rows.length - 1; i += rowsOnPage) {
    for (var j = i; j < i + rowsOnPage; j++) {
      if (j < currentPage * rowsOnPage || j > currentPage * rowsOnPage + rowsOnPage - 1) {
        rows[j].classList.add('pager__hidden');
      }
    }
  }

  for (var i = 0; i < pagerPagesList.length; i++) {
    pagerPagesList[i].addEventListener('click', showCurrentPage);
  }

  function resetStyle() {
    for (var i = 0; i < pagerPagesList.length; i++) {
      pagerPagesList[i].classList.remove('pager__page--current', 'pager__hidden');
      pagerPagesList[i].setAttribute('href', '#');
    }
  }

  function showCurrentPage() {
    if (this.getAttribute('href') === '#') {
      if (this.innerText === '1' || this.innerText === '2' || this.innerText === '3') {
        resetStyle();
        this.classList.add('pager__page--current');
        this.removeAttribute('href');
        tripleDots[0].classList.add('pager__hidden');
        tripleDots[1].classList.remove('pager__hidden');
        pagerPagesList[0].innerText = '1';
        pagerPagesList[1].innerText = '2';
        pagerPagesList[2].innerText = '3';
        if (this.innerText === '1') {
          currentPage = 0;
          pagerPagesList[3].classList.add('pager__hidden');
        } else if (this.innerText === '2') {
          currentPage = 1;
          pagerPagesList[3].classList.add('pager__hidden');
        } else if (this.innerText === '3') {
          currentPage = 2;
          pagerPagesList[3].innerText = '4';
        }
      } else if (this.innerText === '' + amountOfPages
        || this.innerText === '' + (amountOfPages - 1)
        || this.innerText === '' + (amountOfPages - 2)) {
        resetStyle();
        this.classList.add('pager__page--current');
        this.removeAttribute('href');
        tripleDots[0].classList.remove('pager__hidden');
        tripleDots[1].classList.add('pager__hidden');
        pagerPagesList[4].innerText = '' + amountOfPages;
        pagerPagesList[3].innerText = '' + (amountOfPages - 1);
        pagerPagesList[2].innerText = '' + (amountOfPages - 2);
        if (this.innerText === '' + amountOfPages) {
          currentPage = amountOfPages - 1;
          pagerPagesList[1].classList.add('pager__hidden');
        } else if (this.innerText === '' + (amountOfPages - 1)) {
          currentPage = amountOfPages - 2;
          pagerPagesList[1].classList.add('pager__hidden');
        } else if (this.innerText === '' + (amountOfPages - 2)) {
          currentPage = amountOfPages - 3;
          pagerPagesList[1].innerText = '' + (amountOfPages - 3);
        }
      } else {
        tripleDots[0].classList.remove('pager__hidden');
        tripleDots[1].classList.remove('pager__hidden');
        if (this === pagerPagesList[3]) {
          pagerPagesList[1].innerText = '' + (currentPage + 1);
          pagerPagesList[2].innerText = '' + (currentPage + 2);
          pagerPagesList[2].removeAttribute('href');
          pagerPagesList[2].classList.add('pager__page--current');
          pagerPagesList[3].innerText = '' + (currentPage + 3);
          currentPage++;
        } else {
          pagerPagesList[1].innerText = '' + (currentPage - 1);
          pagerPagesList[2].innerText = '' + (currentPage);
          pagerPagesList[2].removeAttribute('href');
          pagerPagesList[2].classList.add('pager__page--current');
          pagerPagesList[3].innerText = '' + (currentPage + 1);
          currentPage--;
        }
      }
    }
    showNRowsOnPage();
  }


  function showNRowsOnPage() {
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = 'table-row'
    }
    for (var i = 0; i < rows.length - 1; i += rowsOnPage) {
      for (var j = i; j < i + rowsOnPage; j++) {
        if (j < currentPage * rowsOnPage || j > currentPage * rowsOnPage + rowsOnPage - 1) {
          rows[j].style.display ='none';
        }
      }
    }
  }
})();