window.onload = function() {
  let oneBlock2 = document.querySelector('.section-home')
  let twoBlock2 = document.querySelector('.features')
  let threeBlock2 = document.querySelector('.icons')
  let fourBlock2 = document.querySelector('.swiper-slider')
  let header2 = document.querySelector('header');
  let header_navigation2 = document.querySelector('.header-navigation');
  let header_burger2 = document.querySelector('.header_burger');

  const animItems2 = document.querySelectorAll('._anim-items');

  let header_linear_one2 = document.querySelector('.header-linear-one');
  let header_linear_two2 = document.querySelector('.header-linear-two');
  let header_linear_three2 = document.querySelector('.header-linear-three');
  let header_linear_four2 = document.querySelector('.header-linear-four');

  let header_navigation_item_a_one2 = document.querySelector('.header-navigation-item-a-one');
  let header_navigation_item_a_two2 = document.querySelector('.header-navigation-item-a-two');
  let header_navigation_item_a_three2 = document.querySelector('.header-navigation-item-a-three');
  let header_navigation_item_a_four2 = document.querySelector('.header-navigation-item-a-four');

  header_linear_one2.classList.add('active')

  if (animItems2.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems2.length; index++) {
        const animItem = animItems2[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 1;

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

          if (oneBlock2.classList.contains('_active')) {
            header_linear_one2.classList.add('active')
            header_navigation_item_a_one2.style.color = "#19191B";
          } else {
            if (!oneBlock2.classList.contains('_active')) {
              header_linear_one2.classList.remove('active')
              header_navigation_item_a_one2.style.color = "#696871";
            }
          }

          if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active')
          } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
              animItem.classList.remove('_active');
            }
          }

            if (twoBlock2.classList.contains('_active')) {
              header_linear_two2.classList.add('active')
              header_navigation_item_a_two2.style.color = "#19191B";
            } else {
              if (!twoBlock2.classList.contains('_active')) {
                header_linear_two2.classList.remove('active')
                header_navigation_item_a_two2.style.color = "#696871";
              }
            }



            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active')
            } else {
              if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
              }
            }

              if (threeBlock2.classList.contains('_active')) {
                header_linear_three2.classList.add('active')
                header_navigation_item_a_three2.style.color = "#19191B";
                header_linear_two2.classList.remove('active')
                header_navigation_item_a_two2.style.color = "#696871";
              } else {
                if (!threeBlock2.classList.contains('_active')) {
                  header_linear_three2.classList.remove('active')
                  header_navigation_item_a_three2.style.color = "#696871";
                }
              }


              if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
              } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
                }
              }

                if (fourBlock2.classList.contains('_active')) {
                  header_linear_four2.classList.add('active')
                  header_navigation_item_a_four2.style.color = "#19191B";
                  header_linear_three2.classList.remove('active')
                  header_navigation_item_a_three2.style.color = "#696871";
                } else {
                  if (!fourBlock2.classList.contains('_active')) {
                    header_linear_four2.classList.remove('active')
                    header_navigation_item_a_four2.style.color = "#696871";
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
