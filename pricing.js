window.onload = function() {
  let oneBlock4 = document.querySelector('.section-home')
  let twoBlock4 = document.querySelector('.section-features')
  let fourBlock4 = document.querySelector('.section-features2')
  let threeBlock4 = document.querySelector('.icons')
  let header4 = document.querySelector('header');
  let header_navigation4 = document.querySelector('.header-navigation');
  let header_burger4 = document.querySelector('.header_burger');

  const animItems4 = document.querySelectorAll('._anim-items4');

  let header_linear_one4 = document.querySelector('.header-linear-one');
  let header_linear_two4 = document.querySelector('.header-linear-two');
  let header_linear_three4 = document.querySelector('.header-linear-three');
  let header_linear_four4 = document.querySelector('.header-linear-four');

  header_linear_one4.classList.add('active')

  if (animItems4.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems4.length; index++) {
        const animItem = animItems4[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 6;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active')
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }

          if (oneBlock4.classList.contains('_active')) {
            header_linear_one4.classList.add('active')
          } else {
            if (!oneBlock4.classList.contains('_active')) {
              header_linear_one4.classList.remove('active')
            }
          }


            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active3')
            } else {
              if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active3');
              }
            }

              if (threeBlock4.classList.contains('_active3')) {
                header_linear_three4.classList.add('active')
              } else {
                if (!threeBlock4.classList.contains('_active3')) {
                  header_linear_three4.classList.remove('active')
                }
              }
















        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);

}
