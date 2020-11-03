$(document).on('DOMContentLoaded', () => {
	$(".header_slider").slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinity: true,
      customPaging:function(){return ''}
      //centerMode: true
  });
});