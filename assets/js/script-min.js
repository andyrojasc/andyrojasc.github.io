function redirect(n){console.log("object"),window.open(n,"_blank")}function getMobileOperatingSystem(){var n=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(n)?"Android":/iPad|iPhone|Mac|iPod/.test(n)&&!window.MSStream?"iOS":"unknown"}function DetectAndServe(){var n=getMobileOperatingSystem();"Android"==n?window.open("https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US","_blank"):"iOS"==n?window.open("https://itunes.apple.com/cr/app/municipalidad-de-orotina/id1450196328?mt=8","_blank"):window.open("https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US","_blank")}$(document).ready(function(){var n=function(){$(".navbar-nav").css("max-height",document.documentElement.clientHeight-150)};n(),$(window).resize(function(){n()}),$(".navbar .navbar-toggler").on("click",function(){n()}),$(".navbar-toggler, .overlay, a.page-scroll").on("click",function(){$(".mobileMenu, .overlay").toggleClass("open"),$(".animated-icon1").toggleClass("open")})}),jQuery(document).ready(function(e){e(".page-scroll, .page-scroll-index").click(function(n){n.preventDefault(),e("html,body").animate({scrollTop:e(this.hash).offset().top-59},800)})}),jQuery(window).on("load",function(){$("#precarga").delay(1500).fadeOut(1e3),$("#ready-screen").delay(2500).fadeIn(1e3)});