$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});


$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: false,
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img class="img-svg" src="../img/icons/back_button.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="img-svg" src="../img/icons/back_button.svg"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__block');
  const menuItem = document.querySelectorAll('.header__link');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__block_active');

      if (hamburger.classList.contains('hamburger_active')) {
          document.body.style.cssText = 'overflow: hidden'
      } else {
          document.body.style.cssText = 'overflow: auto'
      }
   
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          document.body.style.cssText = 'overflow: auto'
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__block_active');
      })
  })
});

  

