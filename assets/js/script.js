function redirect(url) {
    console.log("object");
    window.open(url, '_blank');
}

$(document).ready(function(){
    var fixHeight = function(){
      $(".navbar-nav").css("max-height",document.documentElement.clientHeight -150);
    }
    fixHeight();
    $(window).resize(function(){
     fixHeight();
    });
    $(".navbar .navbar-toggler").on("click",function(){
      fixHeight();
    });
    
    $(".navbar-toggler, .overlay, a.page-scroll").on("click",function(){
      $(".mobileMenu, .overlay").toggleClass("open");
      $('.animated-icon1').toggleClass('open');
    });
  });

  jQuery(document).ready(function($) {

    $(".page-scroll, .page-scroll-index").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 59}, 800); 
    });
});

jQuery(window).on('load',function(){
  $("#precarga").delay(1500).fadeOut(1000);
  $("#ready-screen").delay(2500).fadeIn(1000);
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
      return "Android";
  }

  if (/iPad|iPhone|Mac|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  return "unknown";
}

function DetectAndServe() {
  var os = getMobileOperatingSystem();
  if (os == "Android") {
      window.open('https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US', '_blank');
      //window.location.href = "https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US"; 
  } else if (os == "iOS") {
      window.open('https://itunes.apple.com/cr/app/municipalidad-de-orotina/id1450196328?mt=8', '_blank');
      //window.location.href = "https://itunes.apple.com/cr/app/municipalidad-de-orotina/id1450196328?mt=8";
  } else {
      window.open('https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US', '_blank');
      //window.location.href = "https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US"; 
  }
}

