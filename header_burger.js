$(document).ready(function() {


    $('.header_burger').click(function(event) {
            $('.header_burger,.header-navigation').toggleClass('active-burger');
            $('body').toggleClass('lock');
          });


});
