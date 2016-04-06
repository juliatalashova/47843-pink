/*** Created by Julia on 29.03.2016.*/
'use strict';

window.onload = function() {
  var mainNav = document.getElementsByClassName('main-nav')[0];
  var mainNavToggle = document.getElementsByClassName('main-nav__toggle')[0];
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavToggle.classList.add('main-nav__toggle--closed');
  mainNav.classList.remove('main-nav--opened');
  mainNavToggle.classList.add('main-nav--closed');
  mainNav.style.display = 'none';

  mainNavToggle.addEventListener('click', function() {
    if(mainNavToggle.classList.contains('main-nav__toggle--closed')) {
      mainNavToggle.classList.add('main-nav__toggle--opened');
      mainNavToggle.classList.remove('main-nav__toggle--closed');
      mainNav.classList.add('main-nav--opened');
      mainNav.classList.remove('main-nav--closed');
      mainNav.style.display = 'block';
      mainNav.style.position = 'absolute';
      mainNav.style.left = 0;
      mainNav.style.right = 0;
      mainNav.style.top = 0;
    } else {
      mainNavToggle.classList.add('main-nav__toggle--closed');
      mainNavToggle.classList.remove('main-nav__toggle--opened');
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      mainNav.style.display = 'none';
    }
  });
};
