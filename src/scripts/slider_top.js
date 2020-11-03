$(document).on('DOMContentLoaded', () => {
	$(".slider").slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinity: true,
      centerMode: true,
      asNavFor: '.slider_vertical'
  });
  $('.slider_vertical').slick({
    lazyLoad: 'ondemand',
	  vertical: true,
	  slidesToShow: 3,
	  focusOnSelect: true,
	  arrows: false,
    asNavFor: '.slider',
    centerMode: true,
	  verticalSwiping: true,
	  infinity: true
  });  
});