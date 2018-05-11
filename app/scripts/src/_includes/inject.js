

var inject = function(element) {

  $(element).addClass("target");
  var placement = $(element).attr("data-placement");
  var campaign = $(element).attr("data-campaign") || "665253da9edc423f683a5306f22b883d";
  AylTag.Call({Placement: placement});
  var to = 0;
  var check = function() {
    to++;
    if(to > 50) {
      return;
    }
    if($(element).find(".ayl_v_ckr_b").length > 0) {
      $(element).removeClass("target");
      $(element).find(".ayl_v_ckr_b").removeClass("ayl_v_ckr_b");
    }
    else {
      setTimeout(function() {
        check();
      }, 100);
    }
  }
  check();
}
