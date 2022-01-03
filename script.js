$(document).ready(function(){
    var dateObj = Date.now();
    dateObj += 1000 * 60 * 60 * 24 * 7;
    // create a new Date object, using the adjusted time
    dateObj = new Date(dateObj);
    
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        initialSlide: dateObj
      });
  });