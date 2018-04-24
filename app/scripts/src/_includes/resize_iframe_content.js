
function resize_iframe() {

  scrollToAnchor('#webpage_wrapper');

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
  console.log(getCurrentHeight());
  $("#iframe").contents().find(".site_sizer").height("auto");
  $("#iframe").contents().find(".site_sizer").height(getCurrentHeight() + "px");

}
