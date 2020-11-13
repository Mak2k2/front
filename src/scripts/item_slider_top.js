$(document).on('DOMContentLoaded', () => {
	$(".item_right_slider_top").slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      //infinity: true,
      arrows: false,
      asNavFor: '.item_right_slider_bottom',
      customPaging:function(){return ''}
      //centerMode: true
  });
  $('.item_right_slider_bottom').slick({
    lazyLoad: 'ondemand',
    //vertical: true,
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.item_right_slider_top',
    //centerMode: true,
    //verticalSwiping: true,
    infinity: true
  });
});