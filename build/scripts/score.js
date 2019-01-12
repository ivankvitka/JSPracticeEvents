(function() {
  var tBody = document.querySelector('tbody');
  var rows = tBody.querySelectorAll('tr');
  var positions = tBody.querySelectorAll('.position');
  var showInput = document.querySelector('.show__input');
  var rowsOnPage = +showInput.value;
  var amountOfPages = Math.ceil(rows.length / rowsOnPage);
  var filterInput = document.querySelector('.filter__input');
  var list = document.querySelector('.pager__list');
  var pagerItemsList = document.querySelectorAll('.pager__list-item');
  var pagerPagesList = document.querySelectorAll('.pager__page');
  var prev = document.querySelector('.pager__prev');
  var next = document.querySelector('.pager__next');
  var currentPage = 0;


  createPages();
  setCurrentPage();
  showInput.addEventListener('click', changeAmountOfPages);
  showInput.addEventListener('keyup', changeAmountOfPages);
  filterInput.addEventListener('keyup', filterRows);
  next.addEventListener('click', showNext);
  prev.addEventListener('click', showPrev);
  setEventOnPagerPages();


  function setEventOnPagerPages() {
    for (var i = 0; i < pagerPagesList.length; i++) {
      pagerPagesList[i].addEventListener('click', selectCurrentPage);
    }
  }

  function selectCurrentPage() {
    currentPage = +this.innerText - 1;
    resetStyle();
    setCurrentPage();
  }

  function resetStyle() {
    for (var i = 0; i < pagerPagesList.length; i++) {
      pagerPagesList[i].classList.remove('pager__page--current', 'pager__hidden');
      pagerPagesList[i].setAttribute('href', '#');
    }
  }

  function changeAmountOfPages() {
    createPages();
    setCurrentPage();
    setEventOnPagerPages();
  }

  function createPages() {
    rowsOnPage = +showInput.value;
    if (rowsOnPage) {
      amountOfPages = Math.ceil(rows.length / rowsOnPage);
    }
    clearPages();
    for (var i = 0; i < amountOfPages; i++) {
      var pagerItem = document.createElement('li');
      pagerItem.classList.add('pager__list-item');
      list.appendChild(pagerItem);
      var pagerPage = document.createElement('a');
      pagerPage.classList.add('pager__page');
      pagerPage.setAttribute('href', '#');
      pagerPage.innerText = '' + (i + 1);
      pagerItem.appendChild(pagerPage);
    }
  }

  function clearPages() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }


  function setCurrentPage() {
    rowsOnPage = +showInput.value;
    if (rowsOnPage) {
      amountOfPages = Math.ceil(rows.length / rowsOnPage);
    }
    pagerItemsList = document.querySelectorAll('.pager__list-item');
    pagerPagesList = document.querySelectorAll('.pager__page');
    if (pagerPagesList[currentPage]) {
      var tripleDots = document.createElement('li');
      tripleDots.innerText = '...';
      tripleDots.classList.add('js-triple-dots');
      pagerPagesList[currentPage].classList.add('pager__page--current');
      if (amountOfPages > 5) {
        hidePagers(pagerItemsList, pagerItemsList.length);
        pagerItemsList[0].classList.remove('pager__hidden');
        pagerItemsList[pagerItemsList.length - 1].classList.remove('pager__hidden');
        if (document.querySelector('.js-triple-dots')) {
          removeDots();
        }
        if (currentPage === 0) {
          prev.removeAttribute('href');
          pagerItemsList[currentPage + 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage + 2].classList.remove('pager__hidden');
          removeDots(tripleDots);
          list.insertBefore(tripleDots, pagerItemsList[currentPage + 2].nextSibling);
        } else if (currentPage === 1) {
          pagerItemsList[currentPage].classList.remove('pager__hidden');
          pagerItemsList[currentPage + 1].classList.remove('pager__hidden');
          removeDots(tripleDots);
          list.insertBefore(tripleDots, pagerItemsList[currentPage + 1].nextSibling);
        } else if (currentPage === 2) {
          pagerItemsList[currentPage - 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage].classList.remove('pager__hidden');
          pagerItemsList[currentPage + 1].classList.remove('pager__hidden');
          list.insertBefore(tripleDots, pagerItemsList[currentPage + 1].nextSibling);
        } else if (currentPage === pagerItemsList.length - 1) {
          next.removeAttribute('href');
          pagerItemsList[currentPage - 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage - 2].classList.remove('pager__hidden');
          list.insertBefore(tripleDots, pagerItemsList[currentPage - 2]);
        } else if (currentPage === pagerItemsList.length - 2) {
          pagerItemsList[currentPage - 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage].classList.remove('pager__hidden');
          list.insertBefore(tripleDots, pagerItemsList[currentPage - 1]);
        } else if (currentPage === pagerItemsList.length - 3) {
          pagerItemsList[currentPage - 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage].classList.remove('pager__hidden');
          pagerItemsList[currentPage + 1].classList.remove('pager__hidden');
          list.insertBefore(tripleDots, pagerItemsList[currentPage - 1]);
        } else {
          pagerItemsList[currentPage - 1].classList.remove('pager__hidden');
          pagerItemsList[currentPage].classList.remove('pager__hidden');
          pagerItemsList[currentPage + 1].classList.remove('pager__hidden');
          list.insertBefore(tripleDots, pagerItemsList[currentPage - 1]);
          var secondTripleDots = tripleDots.cloneNode(true);
          list.insertBefore(secondTripleDots, pagerItemsList[currentPage + 1].nextSibling);
        }
      }
      if (currentPage < amountOfPages - 1) {
        next.setAttribute('href', '#');
      }
      if (currentPage > 0) {
        prev.setAttribute('href', '#');
      }
      showNRowsOnPage();
    }
  }

  function removeDots() {
    var dots = document.querySelectorAll('.js-triple-dots');
    for (var i = 0; i < dots.length; i++) {
      dots[i].remove();
    }
  }

  function hidePagers(list, length) {
    for (var i = 0; i < length; i++) {
      list[i].classList.add('pager__hidden');
    }
  }

  function showNext() {
    pagerPagesList = document.querySelectorAll('.pager__page');
    rowsOnPage = +showInput.value;
    if (rowsOnPage) {
      amountOfPages = Math.ceil(rows.length / rowsOnPage);
    }
    currentPage++;
    if (pagerPagesList[currentPage]) {
      pagerPagesList[currentPage - 1].classList.remove('pager__page--current');
      setCurrentPage();
    } else {
      currentPage--;
    }
  }

  function showPrev() {
    pagerPagesList = document.querySelectorAll('.pager__page');
    rowsOnPage = +showInput.value;
    if (rowsOnPage) {
      amountOfPages = Math.ceil(rows.length / rowsOnPage);
    }
    currentPage--;
    if (pagerPagesList[currentPage]) {
      pagerPagesList[currentPage + 1].classList.remove('pager__page--current');
      setCurrentPage();
    } else {
      currentPage++;
    }
  }

  function showNRowsOnPage() {
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

  function filterRows() {
    var cell = document.querySelectorAll('.country');
    var value = filterInput.value.toLowerCase();
    var pager = document.querySelector('.pager');
    var showInput = document.querySelector('.show__input');
    var showTitle = document.querySelectorAll('.show__title');
    var searchResult = 0;
    rowsOnPage = +showInput.value;
    amountOfPages = Math.ceil(rows.length / rowsOnPage);

    if (value !== '') {
      for (var i = 0; i < rows.length; i++) {
        if (!cell[i].innerHTML.toLowerCase().includes(value)) {
          rows[i].classList.add('hidden');
        } else {
          searchResult++;
          rows[i].classList.remove('hidden');
        }
      }
      pager.classList.add('pager__hidden');
      showInput.style.display = 'none';
      showTitle[0].innerText = 'Find ' + searchResult;
      showTitle[1].innerText = 'matches';
      showSearchResult();
    } else {
      for (var i = 0; i < rows.length; i++) {
        rows[i].classList.remove('hidden');
      }
      pager.classList.remove('pager__hidden');
      showInput.style.display = '';
      showTitle[0].innerText = 'Show';
      showTitle[1].innerText = 'rows on page';
      showNRowsOnPage();
    }
  }

  function showSearchResult() {
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = '';
    }
  }
})();