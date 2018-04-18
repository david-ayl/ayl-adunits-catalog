

$(document).on("click", "#page_switcher", function() {

  function getCurrentHeight() {

    var ifr = $("#iframe").contents();
    var currentHeight;
    if( ifr.find(".hp_view #hp_page").length ) {
      currentHeight = ifr.find(".hp_view #hp_page").height();
    }
    else if( ifr.find(".article_view #article_page").length ) {
      currentHeight = ifr.find(".article_view #article_page").height();
    }
    return currentHeight;

  }

  $("#iframe").contents().find("body").toggleClass("article_view").toggleClass("hp_view");
  $("#iframe").contents().find(".site_sizer").height("auto");
  $("#iframe").contents().find(".site_sizer").height(getCurrentHeight() + "px");

})
