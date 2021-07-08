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

let starter_button = document.querySelector('.blog-rates-starter-block2-button');
let premium_button = document.querySelector('.blog-rates-premium-block2-button');
let enterprise_button = document.querySelector('.blog-rates-enterprise-block2-button');

let blog_button_yearly = document.querySelector('.blog-button-yearly');
let blog_button_monthly = document.querySelector('.blog-button-monthly');

let premium_price = document.getElementById("price-premium");
let enterprice_price = document.getElementById("price-enterprise");

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

// rates_button

starter_button.onmouseover = function starter_button_yes() {
  starter_button.classList.add('active')
  if (starter_button.classList.contains('active')) {
    console.log('yes-starter_button');
  }
}

starter_button.onmouseout = function starter_button_button_no() {
  starter_button.classList.remove('active')
  if (!starter_button.classList.contains('active')) {
    console.log('no_starter_button');
  }
}

premium_button.onmouseover = function premium_button_yes() {
  premium_button.classList.add('active')
  if (premium_button.classList.contains('active')) {
    console.log('yes-premium_button');
  }
}

premium_button.onmouseout = function premium_button_button_no() {
  premium_button.classList.remove('active')
  if (!premium_button.classList.contains('active')) {
    console.log('no_premium_button');
  }
}

enterprise_button.onmouseover = function enterprise_button_yes() {
  enterprise_button.classList.add('active');
  if (enterprise_button.classList.contains('active')) {
    console.log('yes-enterprise_button');
  }
}

enterprise_button.onmouseout = function enterprise_button_button_no() {
  enterprise_button.classList.remove('active')
  if (!enterprise_button.classList.contains('active')) {
    console.log('no_enterprise_button');
  }
}

// rates_active

blog_button_yearly.classList.add('active');
premium_price.innerHTML = "$29";

blog_button_yearly.onclick = function() {
  if (!blog_button_yearly.classList.contains('active')) {
    blog_button_yearly.classList.add('active');
    blog_button_monthly.classList.remove('active');
    premium_price.innerHTML = "$29";
    enterprice_price.innerHTML = "$49";
  } else {
    blog_button_yearly.classList.remove('active');
    blog_button_monthly.classList.add('active');
    premium_price.innerHTML = "$35";
    enterprice_price.innerHTML = "$59";
  }
}

blog_button_monthly.onclick = function() {
  if (!blog_button_monthly.classList.contains('active')) {
    blog_button_monthly.classList.add('active');
    blog_button_yearly.classList.remove('active');
    premium_price.innerHTML = "$35";
    enterprice_price.innerHTML = "$59";
  } else {
    blog_button_monthly.classList.remove('active');
    blog_button_yearly.classList.add('active');
    premium_price.innerHTML = "$29";
    enterprice_price.innerHTML = "$49";
  }
}
