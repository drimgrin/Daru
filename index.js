console.log(` hello world`);

`use strict`;

$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".navmenu").toggleClass("visible");
  });
});

$(document).ready(function () {
  function checkWidth() {
    var windowWidth = $("body").innerWidth(),
      elem = $(".navmenu"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
    // страницу для поиска нужного элемента
    if (windowWidth > 890) {
      elem.removeClass("visible");
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
