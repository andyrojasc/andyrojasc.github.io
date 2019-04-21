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


