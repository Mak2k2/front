!function(i){var e={};function t(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return i[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=i,t.c=e,t.d=function(i,e,c){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:c})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)t.d(c,r,function(e){return i[e]}.bind(null,r));return c},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=0)}([function(i,e,t){t(1),t(2),i.exports=t(3)},function(i,e){$(document).on("DOMContentLoaded",()=>{$(".slider").slick({infinity:!0,centerMode:!0}),$(".slider_vertical").slick({vertical:!0,slidesToShow:3,focusOnSelect:!0,arrows:!1,verticalSwiping:!0,infinity:!0});let i=$(".slick-current").attr("data-slick-index");i=Number(i)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+i).css("opacity","0.5"),$(".slick-prev").click((function(){$(".slider_vertical").slick("slickPrev");let i=$(".slick-current").attr("data-slick-index");i=Number(i)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+i).css("opacity","0.5")})),$(".slick-next").click((function(){$(".slider_vertical").slick("slickNext");let i=$(".slick-current").attr("data-slick-index");i=Number(i)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+i).css("opacity","0.5")})),$(".vertical_img1").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",0),$(".vertical_img1").css("opacity","0.5")})),$(".vertical_img2").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",1),$(".vertical_img2").css("opacity","0.5")})),$(".vertical_img3").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",2),$(".vertical_img3").css("opacity","0.5")}))})},function(i,e){$(document).on("DOMContentLoaded",()=>{$(".slider_middle").slick({infinity:!0,slidesToShow:3,slidesToScroll:3})})},function(i,e){console.log("start JS"),window.jQuery&&console.log("test jquery")}]);