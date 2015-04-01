    var word = 18;


$(document).ready(function(){
  $("#interests").click(function(e) {
    var rNum = (Math.random()*50)-2;
    $(this).css( {
    '-webkit-transform': 'rotate('+rNum+'2deg)',
    '-moz-transform': 'rotate('+rNum+'2deg)'
    });
    $(e.target).css('font-size', word);
    word = word + 40;

  });


  $(".button").on("click", function(event) {
    event.preventDefault();
    $("body").toggleClass("not-blue");
  });
});
