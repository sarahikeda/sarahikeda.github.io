$(document).ready(function() {
  $('.inspire').hide();
  $('.projects').hide();
  $('#about').click(function(){
    $('.bio').hide();
    $('.projects').hide();
    $('.inspire').show();
  });
  $('#projects').click(function(){
    $('.bio').hide();
    $('.inspire').hide();
    $('.projects').show();
  });
});
