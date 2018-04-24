
$(document).on("click", "#page_switcher", function() {

  $("#iframe").contents().find("body").toggleClass("article_view").toggleClass("hp_view");
  resize_iframe();

});
