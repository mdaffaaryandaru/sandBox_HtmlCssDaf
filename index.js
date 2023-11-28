$(function () {
  $(document).scroll(function () {
    var $nav = $("#nav");
    $nav.toogleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
