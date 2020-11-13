$(document).on('DOMContentLoaded', () => {
  $('.slider_bottom').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: true,
    //centerMode: true,
    prevArrow: "<img src='../assets/img/arr-left-black.png' class='slick-arrow slick-prev' alt='prev'>",
    nextArrow: "<img src='../assets/img/arr-right-black.png' class='slick-arrow slick-next' alt='next'>",
    infinity: true
  });
});