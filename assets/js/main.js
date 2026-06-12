(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // sticky header
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 36) {
        $(".header").addClass("fixed-top");
      } else {
        $(".header").removeClass("fixed-top");
      }
    });

    // counter up active
    $(".counter-active").counterUp({
      delay: 10,
      time: 1000,
    });

    // brand slider
    $(".brand__slider").slick({
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
    });

    // testimonial slider
    $(".testimonial__slider").slick({
      speed: 1000,
      autoplay: true,
      variableWidth: true,
      infinite: true,
      arrows: false,
      buttons: false,
    });
    $(".testimonial__slider-btn-prev")
      .first()
      .on("click", function () {
        $(".testimonial__slider").slick("slickPrev");
      });
    $(".testimonial__slider-btn-next")
      .first()
      .on("click", function () {
        $(".testimonial__slider").slick("slickNext");
      });

    // blog slider
    $(".blog__slider").slick({
      speed: 1000,
      autoplay: true,
      variableWidth: true,
      infinite: true,
      arrows: false,
      buttons: false,
    });
    $(".blog__slider-btn-prev")
      .first()
      .on("click", function () {
        $(".blog__slider").slick("slickPrev");
      });
    $(".blog__slider-btn-next")
      .first()
      .on("click", function () {
        $(".blog__slider").slick("slickNext");
      });

    // blog slider2
    $(".blog__slider2").slick({
      responsive: [
        {
          breakpoint: 767,
          settings: {
            speed: 1000,
            autoplay: true,
            variableWidth: true,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 9999, // for all larger screens
          settings: "unslick", // destroy slick
        },
      ],
    });
    $(".blog__slider2-btn-prev")
      .first()
      .on("click", function () {
        $(".blog__slider2").slick("slickPrev");
      });
    $(".blog__slider2-btn-next")
      .first()
      .on("click", function () {
        $(".blog__slider2").slick("slickNext");
      });

    // product slider active
    $(".product__slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".video-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: ".video-slider__nav",
    });
    $(".video-slider__nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".video-slider",
      dots: false,
      arrows: false,
      focusOnSelect: true,
    });
    $(".video-slider__btn-prev")
      .first()
      .on("click", function () {
        $(".video-slider").slick("slickPrev");
      });
    $(".video-slider__btn-next")
      .first()
      .on("click", function () {
        $(".video-slider").slick("slickNext");
      });

    // AOS Active
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of data-aos as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by data-aos-* attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });


  // beyond trust dropwond btn
  $(".beyond-trust__dropwond-btn").click(function(e){
    e.preventDefault(); 
    
    $(this).toggleClass("active");
  });
})(jQuery);
