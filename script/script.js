// $(function() {
//     $('html,body').animate({ scrollTop: 0 }, '1');
// });
$(window).scroll(function(event) {
  console.log("HeLLoworld");
  var pos = $(window).scrollTop();
  var bar1,bar2,bar3;


  bar1 = $(".bar1").offset().top;
  bar2 = $(".bar2").offset().top;
  bar3 = $(".bar3").offset().top;
  // bar3 = $(".bar3").offset().top;

  // console.log(bar3);
  console.log("現在の高さ(変数pos)は " + pos);
  if (pos >bar1 -500) {
      $(".bar1 .title").addClass('navin');
      console.log("hello");
    }
  if (pos > bar2 -500) {
      $(".bar2 .title").addClass('navin');
      console.log("hello");
    }
  if (pos > bar3 -500) {
      $(".bar3 .title").addClass('navin');
      console.log("hello");
    }
});
