'use strict';

(function () {

  function Carousel (el) {
    // State
    var index;
    var slidesToScroll = 1;
    var instance = lory(el, createSettings());

    function createSettings() {
      return {
        enableMouseEvents: true
      };
    }

    function updateControls() {
      const next = el.querySelector('.next');
      const prev = el.querySelector('.prev');
      next.classList.remove('disabled');
      prev.classList.remove('disabled');

      var totalItems = el.querySelectorAll('li').length;
      if (totalItems - slidesToScroll <= slidesToScroll * index) {
        next.classList.add('disabled');
      }
      if (index === 0) {
        prev.classList.add('disabled');
      }
    }

    updateControls();

    el.addEventListener('on.lory.resize', function () {
      instance.setup(createSettings());
      updateControls();
    });

    el.addEventListener('before.lory.slide', function (event) {
      if (event.detail.index < event.detail.nextSlide) {
        index++;
      } else {
        index--;
      }
    });

    el.addEventListener('after.lory.slide', function () {
      updateControls();
    });
  }

  [].slice.call(document.querySelectorAll('[data-carousel]')).forEach(function (el) {
    Carousel(el);
  });
})();
