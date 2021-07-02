let header_navigation_item_one = document.querySelector('.header-navigation-item-one');
let header_navigation_item_two = document.querySelector('.header-navigation-item-two');
let header_navigation_item_three = document.querySelector('.header-navigation-item-three');
let header_navigation_item_four = document.querySelector('.header-navigation-item-four');
let header_navigation_item_a_one = document.querySelector('.header-navigation-item-a-one');
let header_navigation_item_a_two = document.querySelector('.header-navigation-item-a-two');
let header_navigation_item_a_three = document.querySelector('.header-navigation-item-a-three');
let header_navigation_item_a_four = document.querySelector('.header-navigation-item-a-four');

let header_button = document.querySelector('.header-button');
let section_home_button = document.querySelector('.section-home-button');

let header_linear_one = document.querySelector('.header-linear-one');
let header_linear_two = document.querySelector('.header-linear-two');
let header_linear_three = document.querySelector('.header-linear-three');
let header_linear_four = document.querySelector('.header-linear-four');

// header_navigation_item

header_navigation_item_one.onmouseover = function header_navigation_item_one_function() {
  header_linear_one.classList.add('active')
  if (header_linear_one.classList.contains('active')) {
    console.log('yes');
    header_navigation_item_a_one.style.color = "#19191B";
  }
}

header_navigation_item_one.onmouseout = function header_navigation_item_one_function_no() {
  header_linear_one.classList.remove('active')
  if (!header_linear_one.classList.contains('active')) {
    console.log('no');
    header_navigation_item_a_one.style.color = "#696871";
  }
}


header_navigation_item_two.onmouseover = function header_navigation_item_two_function() {
  header_linear_two.classList.add('active')
  if (header_linear_two.classList.contains('active')) {
    console.log('yes');
    header_navigation_item_a_two.style.color = "#19191B";
  }
}

header_navigation_item_two.onmouseout = function header_navigation_item_two_function_no() {
  header_linear_two.classList.remove('active')
  if (!header_linear_two.classList.contains('active')) {
    console.log('no');
    header_navigation_item_a_two.style.color = "#696871";
  }
}


header_navigation_item_three.onmouseover = function header_navigation_item_three_function() {
  header_linear_three.classList.add('active')
  if (header_linear_three.classList.contains('active')) {
    console.log('yes');
    header_navigation_item_a_three.style.color = "#19191B";
  }
}

header_navigation_item_three.onmouseout = function header_navigation_item_three_function_no() {
  header_linear_three.classList.remove('active')
  if (!header_linear_three.classList.contains('active')) {
    console.log('no');
    header_navigation_item_a_three.style.color = "#696871";
  }
}


header_navigation_item_four.onmouseover = function header_navigation_item_four_function() {
  header_linear_four.classList.add('active')
  if (header_linear_four.classList.contains('active')) {
    console.log('yes');
    header_navigation_item_a_four.style.color = "#19191B";
  }
}

header_navigation_item_four.onmouseout = function header_navigation_item_four_function_no() {
  header_linear_four.classList.remove('active')
  if (!header_linear_four.classList.contains('active')) {
    console.log('no');
    header_navigation_item_a_four.style.color = "#696871";
  }
}

// header_button

header_button.onmouseover = function header_button_yes() {
  header_button.classList.add('active')
  if (header_button.classList.contains('active')) {
    console.log('yes-button');
  }
}

header_button.onmouseout = function header_button_no() {
  header_button.classList.remove('active')
  if (!header_button.classList.contains('active')) {
    console.log('no-button');
  }
}

// section_home_button

section_home_button.onmouseover = function header_button_yes() {
  section_home_button.classList.add('active')
  if (section_home_button.classList.contains('active')) {
    console.log('yes-section_home_button');
  }
}

section_home_button.onmouseout = function header_button_no() {
  section_home_button.classList.remove('active')
  if (!section_home_button.classList.contains('active')) {
    console.log('no-section_home_button');
  }
}
