// Main JavaScript Document

var $ = jQuery; //negates Wordpress from going into noConflict() mode and allow for use of '$' instead of 'jQuery'

$(document).ready(function() {

  // collapse header if user is scrolled
  toggleScrolledClass();

  //set copyright year to current year
  $('.footer span.year').html(new Date().getFullYear());
});


$(window).scroll(function() {
  toggleScrolledClass();
});

var headerHeight = 104;

function toggleScrolledClass() {
  if($(window).scrollTop() > headerHeight) {
    $('body').addClass('scrolled');
  } else {
    $('body').removeClass('scrolled');
  }
}