(function() {
  var tBody = document.querySelector('tbody');
  var rows = tBody.querySelectorAll('tr');
  var positions = tBody.querySelectorAll('.position');
  var showInput = document.querySelector('.show__input');
  var filterInput = document.querySelector('.filter__input');
  var pagerPagesList = document.querySelectorAll('.pager__page');
  var tripleDots = document.querySelectorAll('.js-triple-dots');
  var prev = document.querySelector('.pager__prev');
  var next = document.querySelector('.pager__next');
  var currentPage = 0;

  showNRowsOnPage(+showInput.value);
  showInput.addEventListener('click', showCurrentPage);
  showInput.addEventListener('keyup', showCurrentPage);
  filterInput.addEventListener('keyup', filterRows);


    for (var i = 0; i < pagerPagesList.length; i++) {
      pagerPagesList[i].addEventListener('click', showCurrentPage);
    }


  function resetStyle() {
    for (var i = 0; i < pagerPagesList.length; i++) {
      pagerPagesList[i].classList.remove('pager__page--current', 'pager__hidden');
      pagerPagesList[i].setAttribute('href', '#');
    }
  }
  /*
    createPages();

    function createPages() {
      var list = document.querySelector('.pager__list');
      var rowsOnPage = +showInput.value;
      var amountOfPages = Math.round(rows.length / rowsOnPage);
      for (var i = 0; i < amountOfPages; i++) {
        var pagerListItem = document.createElement('li');
        pagerListItem.classList.add('pager__lit-item');
        list.appendChild(pagerListItem);
        var pagerPage = document.createElement('a');
        pagerPage.classList.add('pager__page');
        pagerPage.setAttribute('href', '#');
        pagerPage.innerText = '' + (i + 1);
        pagerListItem.appendChild(pagerPage);
      }
    }

    setCurrentPage();

    function setCurrentPage() {
      var pagerPagesList = document.querySelectorAll('.pager__page');
      pagerPagesList[currentPage].classList.add('pager__page--current');
      hidePagers(pagerPagesList, pagerPagesList.length);
      pagerPagesList[0].classList.remove('pager__hidden');
      pagerPagesList[pagerPagesList.length - 1].classList.remove('pager__hidden');
      if (currentPage === 0) {
        pagerPagesList[currentPage + 1].classList.remove('pager__hidden');
        pagerPagesList[currentPage + 2].classList.remove('pager__hidden');
      } else if (currentPage === 1)
    }

    function hidePagers(list, length) {
      for(var i = 0; i < length; i++) {
        list[i].classList.add('pager__hidden');
      }
    }*/

    function showCurrentPage() {
      var rowsOnPage = +showInput.value;
      var amountOfPages = Math.round(rows.length / rowsOnPage);
      pagerPagesList[4].innerText = amountOfPages;
      if (this.getAttribute('href') === '#') {
        if (this.innerText === '1' || this.innerText === '2' || this.innerText === '3') {
          resetStyle();
          tripleDots[0].classList.add('pager__hidden');
          tripleDots[1].classList.remove('pager__hidden');
          if (this.innerText === '1') {
            pagerPagesList[0].classList.add('pager__page--current');
            currentPage = 0;
            pagerPagesList[3].classList.add('pager__hidden');
          } else if (this.innerText === '2') {
            pagerPagesList[1].classList.add('pager__page--current');
            currentPage = 1;
            pagerPagesList[3].classList.add('pager__hidden');
          } else if (this.innerText === '3') {
            pagerPagesList[2].classList.add('pager__page--current');
            currentPage = 2;
            pagerPagesList[3].innerText = '4';
          }
          pagerPagesList[0].innerText = '1';
          pagerPagesList[1].innerText = '2';
          pagerPagesList[2].innerText = '3';
        } else if (this.innerText === '' + amountOfPages
          || this.innerText === '' + (amountOfPages - 1)
          || this.innerText === '' + (amountOfPages - 2)) {
          resetStyle();
          tripleDots[0].classList.remove('pager__hidden');
          tripleDots[1].classList.add('pager__hidden');
          if (this.innerText === '' + amountOfPages) {
            pagerPagesList[4].classList.add('pager__page--current');
            currentPage = amountOfPages - 1;
            pagerPagesList[1].classList.add('pager__hidden');
          } else if (this.innerText === '' + (amountOfPages - 1)) {
            pagerPagesList[3].classList.add('pager__page--current');
            currentPage = amountOfPages - 2;
            pagerPagesList[1].classList.add('pager__hidden');
          } else if (this.innerText === '' + (amountOfPages - 2)) {
            pagerPagesList[2].classList.add('pager__page--current');
            currentPage = amountOfPages - 3;
            pagerPagesList[1].innerText = '' + (amountOfPages - 3);
          }
          pagerPagesList[4].innerText = '' + amountOfPages;
          pagerPagesList[3].innerText = '' + (amountOfPages - 1);
          pagerPagesList[2].innerText = '' + (amountOfPages - 2);
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
          } else if (this === pagerPagesList[1]) {
            pagerPagesList[1].innerText = '' + (currentPage - 1);
            pagerPagesList[2].innerText = '' + (currentPage);
            pagerPagesList[2].removeAttribute('href');
            pagerPagesList[2].classList.add('pager__page--current');
            pagerPagesList[3].innerText = '' + (currentPage + 1);
            currentPage--;
          }
        }
      }
      showNRowsOnPage(rowsOnPage, amountOfPages);
    }


  function showNRowsOnPage(rowsOnPage, amountOfPages) {
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = '';
      positions[i].innerText = i + 1;
    }
    for (i = 0; i < rows.length - 1; i += rowsOnPage) {
      for (var j = i; j < i + rowsOnPage; j++) {
        if (rows[j] && (j < currentPage * rowsOnPage || j > currentPage * rowsOnPage + rowsOnPage - 1)) {
          rows[j].style.display = 'none';
        }
      }
    }
    var pagerInfo = document.querySelector('.pager__info');
    if (currentPage === amountOfPages - 1) {
      pagerInfo.innerText = 'Show ' + (currentPage * rowsOnPage + 1) + ' to ' + rows.length + ' of ' + rows.length + ' rows';
    } else {
      pagerInfo.innerText = 'Show ' + (currentPage * rowsOnPage + 1) + ' to ' + (currentPage * rowsOnPage + rowsOnPage) + ' of ' + rows.length + ' rows';
    }
  }

  function showSearchResult() {
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = '';
    }
  }

  function filterRows() {
    var cell = document.querySelectorAll('.country');
    var value = filterInput.value.toLowerCase();
    var pager = document.querySelector('.pager');
    var show = document.querySelector('.show');
    var rowsOnPage = +showInput.value;
    var amountOfPages = Math.round(rows.length / rowsOnPage);

    console.log(value);
    if (value !== '') {
      for (var i = 0; i < rows.length; i++) {
        if (!cell[i].innerHTML.toLowerCase().includes(value)) {
          rows[i].classList.add('hidden');
        } else {
          rows[i].classList.remove('hidden');
        }
      }
      pager.classList.add('pager__hidden');
      show.style.visibility = 'hidden';
      showSearchResult();
    } else {
      for (var i = 0; i < rows.length; i++) {
        rows[i].classList.remove('hidden');
      }
      pager.classList.remove('pager__hidden');
      show.style.visibility = '';
      showNRowsOnPage(rowsOnPage, amountOfPages);
    }
  }
})();