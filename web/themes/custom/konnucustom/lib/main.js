(function ($) {

Drupal.behaviors.faq = {
  attach: function (context, settings) {
    $('.view-faq-items .views-row').once('myCustomBehavior').click(function(e){
      $(this).toggleClass('faq--open');
      var answer = $(this).find('.field--name-field-faq-antwoord');
          if(answer.hasClass('open')){
            $(answer).removeClass('open');
            $(answer).slideUp();
          }else{
             $(answer).addClass('open');
             $(answer).slideDown("slow");
          }
    });
  }
}
Drupal.behaviors.referentieGrid = {
  attach: function (context, settings) {
    var body = $('body');

    if(body.hasClass('page-nid--4')){
      var grid = $('.block-views-blockreferenties-block-1 .view-content').once('myCustomBehavior').imagesLoaded( function(e) {
       grid.masonry({
        itemSelector: '.block-views-blockreferenties-block-1 .views-row',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
      });
      $(".block-views-blockreferenties-block-1 .view-content").addClass("show");
    });

   }
   if(body.hasClass('page-nid--16')){
      var grid = $('.view-merken .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid.masonry({
        itemSelector: '.view-merken .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
      $('.view-merken .view-content').addClass('show');
    });
   }
   if(body.hasClass('page-node-type-applicatie')){
      var grid = $('.view-toepassingen .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid.masonry({
        itemSelector: '.view-toepassingen .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        //percentPosition: true
      });
       $('.view-toepassingen .view-content').addClass('show');
    });
   }
   if(body.hasClass('page-nid--23')){
      var grid = $('.view-opleidingen .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid.masonry({
        itemSelector: '.view-opleidingen .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        //percentPosition: true
      });
      $('.view-opleidingen .view-content').addClass('show');
    });
   }
   if(body.hasClass('page-nid--18')){
      var grid = $('.view-toepassingen .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid.masonry({
        itemSelector: '.view-toepassingen .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
       $('.view-toepassingen .view-content').addClass('show');
    });
   }
   if(body.hasClass('page-nid--12')){
      var grid = $('.view-team .view-content').once('myCustomBehavior').imagesLoaded( function() {
         grid.masonry({
          itemSelector: '.view-team .views-row',
          // use element for option
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true
        });
         $('.view-team .view-content').addClass('show');
      });

       var grid2 = $('.view-over-ons .view-content').once('myCustomBehavior').imagesLoaded( function() {
         grid2.masonry({
          itemSelector: '.view-over-ons .views-row',
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true
        });
       $('.view-over-ons .view-content').addClass('show');
      });
    }
    if(body.hasClass('page-nid--1')){
      var grid = $('.block-views-blockreferenties-block-2 .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid.masonry({
        itemSelector: '.block-views-blockreferenties-block-2 .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
      $('.block-views-blockreferenties-block-2 .view-content').addClass('show');
    });

     var grid2 = $('.view-over-ons .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid2.masonry({
        itemSelector: '.view-over-ons .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
    });

      var grid3 = $('.view-toepassingen .view-content').once('myCustomBehavior').imagesLoaded( function() {
       grid3.masonry({
        itemSelector: '.view-toepassingen .views-row',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
       $('.view-toepassingen .view-content').addClass('show');
    });
   }
  }
}

Drupal.behaviors.menuTrigger = {
  attach: function (context, settings) {

    $('.header-burger').once('myCustomBehavior').click(function(e){
      var width = $(window).outerWidth();
      var trigger = $('.primary__menu');

      // mobile version
      if( width < 1234){
        if(trigger.hasClass('is-open')){
          trigger.removeClass('is-open');
        }
       else{
            trigger.addClass('is-open');
        }
      }
      // desktop
      else{
        if(trigger.hasClass('is-open') && trigger.hasClass('up')){

          trigger.removeClass('up');
          trigger.removeClass('is-open');
        }
        else if(trigger.hasClass('is-open')){
          trigger.removeClass('is-open');
        }
       else{
            trigger.addClass('is-open');
          }
      }
        return false;
    });
  }
}

Drupal.behaviors.scrollPosition = {
  attach: function (context, settings) {
    var lastScrollTop = 0;
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }
    window.addEventListener("scroll", function(){
       var st = window.pageYOffset || document.documentElement.scrollTop;
       var fromTop = document.documentElement.scrollTop;
       var trigger = $('.primary__menu');
       var height = $(window).innerHeight();
       var width = $(window).outerWidth();
       if( fromTop > height && $('body').hasClass('page-nid--1')){
        trigger.removeClass('white-theme');
        trigger.addClass('black-theme');
       }
       else if(fromTop <= height && $('body').hasClass('page-nid--1')){
        trigger.addClass('white-theme');
        trigger.removeClass('black-theme');
       }

       // scroll on website

      if(width > 1234){
        if (st > lastScrollTop){
          trigger.addClass('down');
          trigger.removeClass('up');
       // scroll up desktop
        } else {
          trigger.addClass('up');
          trigger.addClass('is-open');
          trigger.removeClass('down');
        }
      } else{
        if (st > lastScrollTop){
          trigger.addClass('down');
          trigger.removeClass('up');
        }else {
           trigger.addClass('up');
           trigger.removeClass('down');
        }
      }

       // scroll down dekstop
       /*if (st > lastScrollTop){
          trigger.addClass('down');
          trigger.removeClass('up');
       // scroll up desktop
       } else {
          trigger.addClass('up');
          trigger.addClass('is-open');
          trigger.removeClass('down');
       }*/
       // scroll up with last 10 px desktop
       /*if(st < '10' && trigger.addClass('up') && width > 1234 ){
        //trigger.removeClass('up');
        trigger.addClass('is-open');
       }
       //scroll within last 10 on mobile
      if(st < '10' &&  width < 1234 ){

        if(trigger.hasClass('is-open')){
            trigger.addClass('is-open');
        }
       }
      /*  if(st < lastScrollTop && width < 1234){
          trigger.removeClass('up');
          trigger.removeClass('is-open');
       }*/
       /*if(st < lastScrollTop && width < 1234 && trigger.hasClass('is-open')){
        console.log('in')
        trigger.removeClass('up');
        //trigger.addClass('is-open');
        //trigger.addClass('up');
      }else{
         trigger.removeClass('is-open');
      }*/




       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);

    var top = $('.go__top');
    $(top).on('click', function(event) {

      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 800, function(){

      });
  });

  }
 }

Drupal.behaviors.homepageImage = {
  attach: function (context, settings) {
      $(document).ready(function(){
        changeHeight();
        $(window).once('myCustomBehavior').bind('resize', changeHeight);
        function changeHeight(){
            var height = $(window).innerHeight();
           $('.block-views-blockhomepage-block-1 img').css('height', height);
        }
    });
  }
 }

 Drupal.behaviors.homepageIntro = {
  attach: function (context, settings) {
     var height =  $(".block-config-pages-block .main__region").innerHeight();
     $(".block-config-pages-block .left__region").css('height', height);
  }
 }

 Drupal.behaviors.fancybox = {
  attach: function (context, settings) {
    if($('body').hasClass('page-nid--12') || $('body').hasClass('page-node-type-applicatie')){
      $('[data-fancybox=images]').fancybox({
          loop: true,
          arrows: true,
          keyboard: true,
          zoom: false,
          wheel: false,
          image: {
            preload: true
          },
      });
    }
  }
 }


 Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      $(document).ajaxStart(function () {
        $('.block-views-blockreferenties-block-1 img').addClass('ajax--progress');
      });
      $(document).ajaxSuccess(function () {
        $('.block-views-blockreferenties-block-1 img').addClass('ajax--show');
      });
    }
 }

Drupal.behaviors.anchorScroll = {
    attach: function (context, settings) {
      var hashTagActive = "";
      var link = $('.over-ons__menu a');
      var link1 = $('.field--name-dynamic-twig-fieldnode-sign-up-knop a');
      var link2 = $('.field--name-dynamic-copy-fieldnode-sign-up-knop-2 a');
      function animateLink(link){
         link.once('myCustomBehavior').on("click touchstart" , function (event) {
          $hash = $(this.hash);

          if(hashTagActive != $hash) { //this will prevent if the user click several times the same link to freeze the scroll.
              event.preventDefault();
              //calculate destination place
              var dest = 0;
              if ($hash.offset().top > $(document).height() - $(window).height()) {
                  dest = $(document).height() - $(window).height();
                   console.log('in');
              } else {
                  dest = $hash.offset().top;
              }
              //go to destination
              $('html,body').animate({
                  scrollTop: dest
              }, 2000, 'swing');

              hashTagActive = $hash;
              return false;
          }
      });
      }
      animateLink(link);
      var dest = $('.block-views-blockopleidingen-block-1').offset().top + 150;
      link1.click(function(){
        $("body, html").animate({scrollTop:dest}, 2000, 'swing');
      });
      link2.click(function(){
        $("body, html").animate({scrollTop:dest}, 2000, 'swing');
      });
      link.click(function(event){
        event.preventDefault();
        link.removeClass('is-active');
        $(this).addClass('is-active');
    });
  }
}

})(jQuery);


