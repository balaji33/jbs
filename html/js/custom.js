$(document).ready(function () {
  // document ready close

  //Sticknav Script----------------

  $(window).scroll(function () {
      if ($(window).scrollTop() >= 10) {
          $("header").addClass("sticky");
          $("body").addClass("header-sticky");
      } else {
          $("header").removeClass("sticky");
          $("body").removeClass("header-sticky");
      }
  });



// Main Nav Code--------------------


$(".menu-icon").click(function(){
  $("body").addClass("menu-open");
  $(".menu-mask").addClass("active");
});
$(".menu-close").click(function(){
  $("body").removeClass("menu-open");
  $(".menu-mask").removeClass("active");
});
$(".menu-mask").click(function(){
  $("body").removeClass("menu-open");
  $(".menu-mask").removeClass("active");
});




}); // document ready close


$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})


//Fixed-element-when-scroll
$(window).scroll(function (e) {
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ position: "sticky  ", top: "83px" });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});