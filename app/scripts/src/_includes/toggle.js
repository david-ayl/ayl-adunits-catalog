

$(document).on("click", "#page_switcher", function() {

  console.log($("#iframe").contents().find("body").toggleClass("article_view").toggleClass("hp_view"));

})
