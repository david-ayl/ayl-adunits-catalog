
$(document).on("click", "#site_iframe_sizer .radio_input", function() {

  $("#iframe_wrapper").removeClass("desktop tablet mobile").addClass($(this).attr("id"));
  $("#iframe").contents().find("body").removeClass("desktop tablet mobile").addClass($(this).attr("id"));
  resize_iframe();

});
