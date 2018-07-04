$(function() {
    // $('html,body').animate({ scrollTop: 0 }, '1');
    $(window).scroll(function(event) {
      h = $(window).height();
      console.log("h="+ h);
      console.log("HeLLoworld");
      var pos = $(window).scrollTop();
      var bar1,bar2,bar3;
      app_pos = $(".app").offset().top;
      console.log(app_pos+"app");
      console.log(pos > 2500);

      bar1 = $(".bar1").offset().top;
      bar2 = $(".bar2").offset().top;
      bar3 = $(".bar3").offset().top;
      // bar3 = $(".bar3").offset().top;
      "bar + i"


      console.log("現在の高さ(変数pos)は " + pos);
      for (var i = 1; i <=3; i++) {

        if (pos > eval("bar" + i) - 600) {
            $(".bar"+i+" .title").addClass('navin');
            console.log("hello");
          }
      }
      if(pos > 2500){
        $(".app").addClass('fadeout');
        $(".app").removeClass('fadein');
      }else{
        $(".app").addClass('fadein');
        $(".app").removeClass('fadeout');
      }

    });
});
