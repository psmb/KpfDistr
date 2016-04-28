(function () {
  'use strict';

  var carouselClass = 'js-Carousel';
  Array.prototype.forEach.call(document.getElementsByClassName(carouselClass), function (item) {
    Carousel(item);
  });

  function Carousel(node) {
    var opts = {
      carouselItemClass: 'js-Carousel-item',
      carouselItemTitleClass: 'js-Carousel-itemTitle',
      activeClass: 'is-active',
      isEnabledClass: 'is-enabled',
      carouselNavClass: 'Carousel-nav',
      carouselNavItemClass: 'Carousel-navItem'
    }
    var slides = [];
    var navItems = [];
    setup();
    selectSlide(0);

    function setup() {
      var nav = document.createElement('div');
      nav.classList.add(opts.carouselNavClass);
      Array.prototype.forEach.call(node.getElementsByClassName(opts.carouselItemClass), function (slide, i) {
        slides[i] = slide;

        var navItem = document.createElement('a');
        navItem.classList.add(opts.carouselNavItemClass);
        navItem.innerHTML = slide.getElementsByClassName(opts.carouselItemTitleClass)[0].innerText;
        navItem.addEventListener('click', function (evt) {
          evt.preventDefault();
          selectSlide(i);
        });
        navItems[i] = navItem;
        nav.appendChild(navItem);
      });
      node.appendChild(nav);
      node.classList.add(opts.isEnabledClass);
    }

    function selectSlide(slideNumber) {
      slides.forEach(function (slide) {
        slide.classList.remove(opts.activeClass);
      });
      navItems.forEach(function (navItem) {
        navItem.classList.remove(opts.activeClass);
      });
      slides[slideNumber].classList.add(opts.activeClass);
      navItems[slideNumber].classList.add(opts.activeClass);
    }

  }
}());
