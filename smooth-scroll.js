$(function(){

$('.scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 800);
  e.preventDefault();
});

$('.scroll2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#features').offset().top }, 800);
  e.preventDefault();
});

$('.scroll3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#pricing').offset().top }, 800);
  e.preventDefault();
});

$('.scroll4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#blog').offset().top }, 800);
  e.preventDefault();
});



})
