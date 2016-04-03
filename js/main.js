/*** Created by Julia on 29.03.2016.*/
'use strict';
window.onload = function() {
  var mainNav = document.getElementsByClassName('main-nav')[0];
  var mainNavToggle = document.getElementsByClassName('main-nav__toggle')[0];
  mainNavToggle.addEventListener('click', function() {
    if(mainNavToggle.classList.contains('main-nav__toggle--closed')) {
      mainNavToggle.classList.add('main-nav__toggle--opened');
      mainNavToggle.classList.remove('main-nav__toggle--closed');
      mainNav.classList.add('main-nav--opened');
      mainNav.classList.remove('main-nav--closed');
    } else {
      mainNavToggle.classList.add('main-nav__toggle--closed');
      mainNavToggle.classList.remove('main-nav__toggle--opened');
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });
};
