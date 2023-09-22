// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu__close');
  
// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });
// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// const percents = document.querySelectorAll('.skills__rating-percent'),
//     rectangles = document.querySelectorAll('.skills__rating-rectangle span');
// percents.forEach( (item, i) => {
//     rectangles[i].style.width = item.innerHTML;
// });

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