!function(e){var t={};function i(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(r,c,function(t){return e[t]}.bind(null,c));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(1),i(2),i(3),e.exports=i(4)},function(e,t){$(document).ready(()=>{send_message.onclick=()=>{let e=document.getElementById("email_message").value,t=document.getElementById("text_message").value,i=e.indexOf("@");""==e||-1==i||i>3||e.length>11||-1==e.indexOf(".")?error_email.innerHTML="Пожалуйста, введите правильный email.":""==t?(error_email.innerHTML="",error_text.innerHTML="Поле не заполнено."):(message_success.innerHTML='<div class="success"><h1>отправлено</h1><p>Мы ответимвам на почту</p><p>в течение нескольких рабочих дней</p></div>',error_email.innerHTML="",error_text.innerHTML=""),localStorage.setItem("emailForm",e);let r=localStorage.getItem("emailForm");0!=r&&$("#email_message").val(r),localStorage.setItem("textForm",t);let c=localStorage.getItem("textForm");0!=c&&$("#text_message").val(c)}})},function(e,t){$(document).ready(()=>{$(".show-popup").magnificPopup({type:"inline",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0})})},function(e,t){$(document).on("DOMContentLoaded",()=>{$(".slider_middle").slick({infinity:!0,slidesToShow:3,slidesToScroll:3})})},function(e,t){$(document).on("DOMContentLoaded",()=>{$(".slider").slick({infinity:!0,centerMode:!0}),$(".slider_vertical").slick({vertical:!0,slidesToShow:3,focusOnSelect:!0,arrows:!1,verticalSwiping:!0,infinity:!0});let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5"),$(".slick-prev").click((function(){$(".slider_vertical").slick("slickPrev");let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5")})),$(".slick-next").click((function(){$(".slider_vertical").slick("slickNext");let e=$(".slick-current").attr("data-slick-index");e=Number(e)+1,$(".slider_vertical *").css("opacity","1"),$(".vertical_img"+e).css("opacity","0.5")})),$(".vertical_img1").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",0),$(".vertical_img1").css("opacity","0.5")})),$(".vertical_img2").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",1),$(".vertical_img2").css("opacity","0.5")})),$(".vertical_img3").click((function(){$(".slider_vertical *").css("opacity","1"),$(".slider").slick("slickGoTo",2),$(".vertical_img3").css("opacity","0.5")}))})}]);