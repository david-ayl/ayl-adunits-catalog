

var inject = function(element) {

  var placement = $(element).attr("data-placement");
  var campaign = $(element).attr("data-campaign") || "665253da9edc423f683a5306f22b883d";
  var src = "//fo-api.omnitagjs.com/fo-api/ot.js?Placement=" + placement + "&Campaign=" + campaign;
  var scrpt = $("<script src='" + src + "' type='text/javascript' async></script>");
  $(element).prepend(scrpt);

}
