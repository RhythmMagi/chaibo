(function ($) {

  $("#menu-filters li a").click ( function() {
    $("#menu-filters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
  //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();
    $(".menu-header").fadeOut();
    
    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

})(jQuery);

// On page load sandwiches will populate the menu
$(document).ready(
  function () {
    $('[data-filter=".sandwich"]').click()
  }
)
