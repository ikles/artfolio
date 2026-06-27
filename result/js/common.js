jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });




  function reviewsSlider() {
    if ($(window).width() <= 640) {
      if (!$('.zon__row').hasClass('slick-initialized')) {
        $('.zon__row').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 200,
          autoplay: false,
          touchThreshold: 10,          
          cssEase: 'ease-out',
          dots: true,
          arrows: false
        });
      }
    } else {
      if ($('.zon__row').hasClass('slick-initialized')) {
        $('.zon__row').slick('unslick');
      }
    }
  }

  reviewsSlider();
  $(window).on('resize', reviewsSlider);


/************************************/

/*  $('.wrapper').prepend('<span class="eye-3"></span>');
  const url = window.location.href;
  const match = url.match(/(\d+-?\d*)\.html$/);
  const pg = match[1];
  $('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

  $('.eye-3').click(function (e) {
    e.preventDefault();  
    $('body').toggleClass('active');    
    $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
    $('body:not(.active)').css('background-image', "unset");
  });*/

/************************************/

  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });
    
  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent()
      });
    });
  }



  function tabs(element) {    
    $(element).find('.tabs__list-item').click(function () {
      $(element).find('.tabs__list-item').removeClass('active');
      $(this).addClass('active');    
      let num = $(this).index();
      $(element).find('.tabs__content-list-item').removeClass('active');
      $(element).find('.tabs__content-list-item').eq(num).addClass('active');  
    });
  }

  tabs('.ppscard-main__tabs');


  $(function () {

    $('.ptabs__list li').on('click', function () {

      let index = $(this).index();

      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');

      if (index === 0) {
        $('.ptabs__item').stop(true, true).fadeIn(200);
        return;
      }

      $('.ptabs__item').stop(true, true).hide();
      $('.ptabs__item[data-cat="' + index + '"]').fadeIn(400);

    });

  });


  $('.accordion-header').toggleClass('inactive-header');
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordioon-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }

    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });

  return false;

}); //ready

