!function(e){var i={};function t(c){if(i[c])return i[c].exports;var r=i[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=i,t.d=function(e,i,c){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)t.d(c,r,function(i){return e[i]}.bind(null,r));return c},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=0)}([function(e,i,t){t(1),t(2),t(3),e.exports=t(4)},function(e,i){$(document).ready(()=>{send_message.onclick=()=>{let e=document.getElementById("email_message").value,i=document.getElementById("text_message").value,t=e.indexOf("@");""==e||-1==t||t>3||e.length>11||-1==e.indexOf(".")?error_email.innerHTML="Пожалуйста, введите правильный email.":""==i?(error_email.innerHTML="",error_text.innerHTML="Поле не заполнено."):(message_success.innerHTML='<div class="success"><h1>отправлено</h1>',error_email.innerHTML="",error_text.innerHTML="")}})},function(e,i){$(document).on("DOMContentLoaded",()=>{$(".slider").slick({infinity:!0,centerMode:!0}),$(".slider_vertical").slick({vertical:!0,slidesToShow:3,focusOnSelect:!0,arrows:!1,verticalSwiping:!0,infinity:!0});let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5"),$(".slick-prev").click((function(){$(".slider_vertical").slick("slickPrev");let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5")})),$(".slick-next").click((function(){$(".slider_vertical").slick("slickNext");let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5")})),$(".vertical_img1").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",0),$(".vertical_img1").css("opacity","0.5")})),$(".vertical_img2").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",1),$(".vertical_img2").css("opacity","0.5")})),$(".vertical_img3").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",2),$(".vertical_img3").css("opacity","0.5")}))})},function(e,i){$(document).ready(()=>{$(".show-popup").magnificPopup({type:"inline",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0})})},function(e,i){$(document).on("DOMContentLoaded",()=>{$(".slider_middle").slick({infinity:!0,slidesToShow:3,slidesToScroll:3})})}]);