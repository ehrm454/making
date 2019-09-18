$(document).ready(function () {
    /*$(".banner_left").hide(1000);
       $(".banner_right").hide(1000);

       $('.banner_left').css("color","white");
      $('.banner_right').css("color","white");
      */

    $('#banner_img1 img').hide();
    $('#banner_img2 img').hide();
    $('#banner_img3 img').hide();
    $('.intro_me').hide();


    $('.hover_1').hover(function () {
        $('.intro_me').show();
    });
    $('.hover_2').hover(function () {
        $('.intro_me').show();
    });
    $('.hover_3').hover(function () {
        $('#skills').show();
    });
    $('.hover_4').hover(function () {
/*        $('#banner_img1').css("z-index","90");*/
        $('#banner_img1 img').show();
    });
    $('.hover_5').hover(function () {
   /*     $('#banner_img2').css("z-index","90");*/
        $('#banner_img2 img').show();
    });
    $('.hover_6').hover(function () {
    /*    $('#banner_img3').css("z-index","90");*/
        $('#banner_img3 img').show();
    });


    $('.hover_1').mouseleave(function () {

    });

    $('.hover_2').mouseleave(function () {
        $('.intro_me').hide();
    });

    $('.hover_3').mouseleave(function () {
        $('#skills').hide();
    });

    $('.hover_4').mouseleave(function () {
        $('#banner_img1 img').hide();
    });
    $('.hover_5').mouseleave(function () {
        $('#banner_img2 img').hide();
    });
    $('.hover_6').mouseleave(function () {
        $('#banner_img3 img').hide();
    });




    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });

    var left = $(".me_intro");
    var right = $(".skill_intro");
    var img1 = $(".ppt_img1");
    var img2 = $(".ppt_img2");
    var img3 = $(".ppt_img3");

    right.hide();
    $(img1).css("left", "-600px");
    $(img3).css("left", "-600px");

    $(left).css("top", "-700px");
    $(left).css("left", "-300px");

    $(right).css("top", "-1000px");
    $(right).css("right", "-300px");

    $(window).on("scroll", function () {
        let top = $(window).scrollTop();
        if (top >= 545) {
            right.show();
            setTimeout(function () {
                $(left).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 1000);
                $(right).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 1000);
            });
        }
        if (top >= 1500) {
            $(img2).css("right", "-700px");
            setTimeout(function () {
                $(img1).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);
            });
        }

        if (top >= 2410) {

            setTimeout(function () {
                $(img2).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);

            });
        }

        if (top >= 3600) {
            setTimeout(function () {
                $(img3).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);
            });

        }
    });
});