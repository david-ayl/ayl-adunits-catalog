
$(document).on("click", "#site_iframe_sizer .radio_input", function() {

  $("#iframe_wrapper").removeClass("desktop tablet mobile").addClass($(this).attr("id"));

});
