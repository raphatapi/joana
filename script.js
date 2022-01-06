$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        centerMode: true,
        centerPadding: '60px'
      });
    
    
    var now = new Date();
    var target = now.getDay();
    console.log(target);
    if (target == 2) {
        console.log("yay!")
        $('.autoplay').slick('slickCurrentSlide');
   }      
  });