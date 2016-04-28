(function () {
  'use strict';

  Array.prototype.forEach.call(document.getElementsByClassName('js-Carousel'), function (item) {
    Carousel(item, {
      nav: true
    });
  });

  Array.prototype.forEach.call(document.getElementsByClassName('js-Carousel--slider'), function (item) {
    Carousel(item, {
      links: true
    });
  });







  function Carousel(node, opts) {
    var opts = Object.assign({
      nav: false,
      links: false,
      carouselItemClass: 'js-Carousel-item',
      carouselItemTitleClass: 'js-Carousel-itemTitle',
      activeClass: 'is-active',
      isEnabledClass: 'is-enabled',
      carouselNavClass: 'Carousel-nav',
      carouselNavItemClass: 'Carousel-navItem',
      carouselLinksClass: 'Carousel-links',
      carouselLinksPrevClass: 'Carousel-linksPrev',
      carouselLinksNextClass: 'Carousel-linksNext'
    }, opts);
    var slides = Array.prototype.map.call(node.getElementsByClassName(opts.carouselItemClass), function (slide) {
      return slide;
    });
    var navItems = [];
    var currentSlide = null;

    if (opts.nav) {
      setupNav();
    }
    if (opts.links) {
      setupLinks();
    }
    selectSlide(0);
    node.classList.add(opts.isEnabledClass);

    function setupNav() {
      var nav = document.createElement('div');
      nav.classList.add(opts.carouselNavClass);
      slides.forEach(function (slide, i) {
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
    }

    function setupLinks() {
      var links = document.createElement('div');
      links.classList.add(opts.carouselLinksClass);
      var prev = document.createElement('a');
      prev.innerHTML = '<svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>';
      prev.classList.add(opts.carouselLinksPrevClass);
      prev.addEventListener('click', function (evt) {
        evt.preventDefault();
        selectSlide((currentSlide - 1 + slides.length) % slides.length);
      });
      links.appendChild(prev);
      var next = document.createElement('a');
      next.innerHTML = '<svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>';
      next.classList.add(opts.carouselLinksNextClass);
      next.addEventListener('click', function (evt) {
        evt.preventDefault();
        selectSlide((currentSlide + 1) % slides.length);
      });
      links.appendChild(next);
      node.appendChild(links);
    }

    function selectSlide(slideNumber) {
      currentSlide = slideNumber;
      slides.forEach(function (slide) {
        slide.classList.remove(opts.activeClass);
      });
      slides[slideNumber].classList.add(opts.activeClass);
      if (navItems.length) {
        navItems.forEach(function (navItem) {
          navItem.classList.remove(opts.activeClass);
        });
        navItems[slideNumber].classList.add(opts.activeClass);
      }
    }

  }
}());
