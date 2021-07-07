window.onload = function() {
  let oneBlock3 = document.querySelector('.section-home')
  let twoBlock3 = document.querySelector('.features')
  let threeBlock3 = document.querySelector('.icons')
  let fourBlock3 = document.querySelector('.blog')
  let header3 = document.querySelector('header');
  let header_navigation3 = document.querySelector('.header-navigation');
  let header_burger3 = document.querySelector('.header_burger');

  const animItems3 = document.querySelectorAll('._anim-items3');



  if (animItems3.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems3.length; index++) {
        const animItem = animItems3[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 1.5;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active5')
        } else {
          if (!animItem.classList.contains('_anim-no-hide3')) {
            animItem.classList.remove('_active5');
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
