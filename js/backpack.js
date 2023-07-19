
    /*/////////////////////////////////////Navegation Color Change////////////////////////////////////*/
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
          $(".scroll-color").css("background" , "#333");
        }
        else{
            $(".scroll-color").css("background", "");  	
        }
    })
    
    /*/////////////////////////////////////Sticky Side Bar////////////////////////////////////*/
    if($('#sticky').length){
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top;
      var stickyHeight = $('#sticky').height();

      $(window).scroll(function(){
        var limit=$('#footer').offset().top - stickyTop - 240;
        var windowTop =$(window).scrollTop();
        if(stickyTop < windowTop){
          el.css({
            position:'fixed',
            "width": '350px' ,
            top:0
          });
        }
        else{
          el.css({
            position:'static',
            "width":'unset',
          });
        }
        if(limit < windowTop){
          var diff = limit - windowTop;
          el.css({
            top:diff
          });
        }
        if($(window).width()<1200){
          el.css({
            "width":'290px',
          });
        }
        if($(window).width()<769){
          el.css({
            position:'static',
            "width":'100%',
          });
        }
      });
    }
    /*/////////////////////////////////////Slider////////////////////////////////////*/
    $('#insta-slider').slick({
      dots: false,
      infinite: true,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode:true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
      
    /*/////////////////////////////////////Wow JS////////////////////////////////////*/
    new WOW().init();
  });