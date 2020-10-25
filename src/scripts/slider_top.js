$(document).on('DOMContentLoaded', () => {
	$(".slider").slick({
     infinity: true,
     centerMode: true
  });
  $('.slider_vertical').slick({
	  vertical: true,
	  slidesToShow: 3,
	  focusOnSelect: true,
	  arrows: false,
	  verticalSwiping: true,
	  infinity: true
  });

  let index = $(".slick-current").attr("data-slick-index");
  	index = Number(index) + 1;
  	$('.slider_vertical *').css('opacity', '1');
  	$('.vertical_img' + index).css('opacity', '0.5');

  $(".slick-prev").click(function () {
  	$('.slider_vertical').slick('slickPrev');
  	let index = $(".slick-current").attr("data-slick-index");
  	index = Number(index) + 1;
  	$('.slider_vertical *').css('opacity', '1');
  	$('.vertical_img' + index).css('opacity', '0.5');
  });

  $(".slick-next").click(function () {
  	$('.slider_vertical').slick('slickNext');
  	let index = $(".slick-current").attr("data-slick-index");
  	index = Number(index) + 1;
  	$('.slider_vertical *').css('opacity', '1');
  	$('.vertical_img' + index).css('opacity', '0.5');
  });

  $(".vertical_img1").click(function () {
  	$('.slider_vertical *').css('opacity', '1');
  	$('.slider').slick('slickGoTo',0);
  	$('.vertical_img1').css('opacity', '0.5');
  });
  $(".vertical_img2").click(function () {
  	$('.slider_vertical *').css('opacity', '1');
  	$('.slider').slick('slickGoTo',1);
  	$('.vertical_img2').css('opacity', '0.5');
  });
  $(".vertical_img3").click(function () {
  	$('.slider_vertical *').css('opacity', '1');
  	$('.slider').slick('slickGoTo',2);
  	$('.vertical_img3').css('opacity', '0.5');
  });

});