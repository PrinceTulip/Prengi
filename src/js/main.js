window.addEventListener('DOMContentLoaded', () => {
  const slider = () => {

    function bindSlider(slidesSelector, prevSelector, nextSelector, dotsSelector, activeDotSelector) {
      const slides = Array.prototype.slice.call(document.querySelectorAll(slidesSelector));
      createDots();
      const prev = document.querySelector(prevSelector);
      const next = document.querySelector(nextSelector);
      const dots = Array.prototype.slice.call(document.querySelectorAll(dotsSelector));
      const activeDot = activeDotSelector;
      let slideIndx = 1;
      let pause = null;


      function currency(n) {
        showSlide(n)
      }

      function createDots() {
        const item = document.createDocumentFragment();
        for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('i');
          dot.classList.add('control__dot');
          item.appendChild(dot);
        }
        document.querySelector('.control__dots').appendChild(item);
      }

      function showSlide(n) {

        if (slideIndx > slides.length) {
          n = 1;
          slideIndx = 1;
        } else if (slideIndx < 1) {
          slideIndx = slides.length;
          n = slides.length;
        }

        try {
          dots.forEach((item) => {
            item.classList.remove(activeDot);
          });
        } catch (e) {
        }

        slides.forEach((item) => {
          item.style.display = 'none';
          item.classList.add('slideInRight');
        });
        slides[n - 1].style.display = 'block';
        slides[n - 1].classList.add('slideInRight');
        try {
          dots[n - 1].classList.add(activeDot);
        } catch (e) {
        }
      }

      try {
        next.addEventListener('click', () => {
          showSlide(slideIndx += 1);
        });

        prev.addEventListener('click', () => {
          showSlide(slideIndx -= 1);
        });
      } catch (e) {
      }

      try {
        dots.forEach((item, i) => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(i + 1);
          })
        })
      } catch (e) {
      }

      const autoPlay = () => {
        pause = setInterval(() => {
           showSlide(slideIndx += 1);
        }, 5000)
      };

      slides[0].parentElement.addEventListener('mouseover', () => {
       clearInterval(pause);
      });
      slides[0].parentElement.addEventListener('mouseout', () => {
        autoPlay();
      });

      //autoPlay();
      showSlide(slideIndx)
    }

    bindSlider( '.promo__item', '.control__left', '.control__right','.control__dot', 'control__dot--active')
  };

  const tabs = () => {
    const bindTabs = (triggerSelector, contentSelector, activeSelector) => {
      const trigger = document.querySelectorAll(triggerSelector);
      const content = document.querySelectorAll(contentSelector);
      const active = activeSelector;

      trigger.forEach((item, i) => {
        item.addEventListener('click', (e) => {
          hideTabs();
          e.preventDefault();
          showTabs(i);
          showSlide(i)
        })
      });

      const hideTabs = () => {
        trigger.forEach((item) => {
          item.classList.remove(active);
        });

        content.forEach((item) => {
          item.style.display = 'none';
        })
      };

      const showTabs = (i) => {
        trigger[i].classList.add(active);
        content[i].style.display = 'block';
      }

      hideTabs();
      showTabs(0)
    };

    bindTabs('.expert-decisions__tabs-link', '.expert-decisions__content ', 'expert-decisions__tabs-link--active');
  };

  function showSlide  (i = 0)  {
    function bindSlider(slidesSelector, prevSelector, nextSelector,) {
      const slides = Array.prototype.slice.call(document.querySelectorAll(slidesSelector));
      const slide = slides[i];
      const childSlide = Array.from(slide.children);
      const prev = document.querySelector(prevSelector);
      const next = document.querySelector(nextSelector);
      let slideIndx = 1;

      function showSlide(n) {
        if (slideIndx > childSlide.length) {
          n = 1;
          slideIndx = 1;
        } else if (slideIndx < 1) {
          slideIndx = childSlide.length;
          n = childSlide.length;
        }

        childSlide.forEach((item) => {
          item.style.display = 'none';
          item.classList.add('slideInRight');
        });

        childSlide[n - 1].style.display = 'block';
        childSlide[n - 1].classList.add('slideInRight');
      }
      console.log(childSlide)

      try {
        next.addEventListener('click', () => {
          showSlide(slideIndx += 1);
        });

        prev.addEventListener('click', () => {
          showSlide(slideIndx -= 1);
        });
      } catch (e) {
      }

      showSlide(slideIndx)
    }

    bindSlider('.expert-decisions__content', '.expert-decision__prevSelector', '.expert-decision__nextSelector');
  };




  slider();
  tabs();
  showSlide();
})

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-navigation__list'),
      menuItem = document.querySelectorAll('.header-navigation__list-item'),
      hamburger = document.querySelector('.header__burger-button');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list--active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list--active');
    })
  })
})
