window.onload = function() {
  let oneBlock3 = document.querySelector('.section-home')
  let twoBlock3 = document.querySelector('.section-features')
  let fourBlock3 = document.querySelector('.section-features2')
  let threeBlock3 = document.querySelector('.icons')
  let header3 = document.querySelector('header');
  let header_navigation3 = document.querySelector('.header-navigation');
  let header_burger3 = document.querySelector('.header_burger');

  const animItems3 = document.querySelectorAll('._anim-items3');

  let header_linear_one3 = document.querySelector('.header-linear-one');
  let header_linear_two3 = document.querySelector('.header-linear-two');
  let header_linear_three3 = document.querySelector('.header-linear-three');
  let header_linear_four3 = document.querySelector('.header-linear-four');

  header_linear_one3.classList.add('active')

  if (animItems3.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems3[index];
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

          if (oneBlock3.classList.contains('_active')) {
            header_linear_one3.classList.add('active')
          } else {
            if (!oneBlock3.classList.contains('_active')) {
              header_linear_one3.classList.remove('active')
            }
          }



        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active2')
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active2');
          }
        }

          if (fourBlock3.classList.contains('_active2')) {
            header_linear_two3.classList.add('active')
          } else {
            if (!fourBlock3.classList.contains('_active2')) {
              header_linear_two3.classList.remove('active')
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
