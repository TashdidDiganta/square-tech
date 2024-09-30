(function ($) {
    "use strict";

    // sticky js 
    // windowOn.on('scroll', function () {
    //   var scroll = windowOn.scrollTop();
    //   if (scroll < 100) {
    //     $("#tp-header-sticky").removeClass("header-sticky");
    //   } else {
    //     $("#tp-header-sticky").addClass("header-sticky");
    //   }
    // });

    // mobile menu 
    var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
    var tpSideMenu = $('.tp-offcanvas-menu nav');
    tpSideMenu.append(tpMenuWrap);
    if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
      $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });




    // data bg img 
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data bg color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });


})(jQuery);