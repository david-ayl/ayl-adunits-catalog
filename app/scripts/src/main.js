
$(document).ready(function() {

  $(function() {
    $.scrollify({
      section : ".section",
    });
  });

  var _$ = function(elem) {
    return $("#iframe").contents().find(elem);
  }


  $("#change_zoom").on("change", function() {
    _$("body").animate({"zoom" : $(this).val() / 10}, "slow");
  });

  $(".checkbox_input").on("change", function() {
    var context = $(this).attr("name");
    if ( $(this).prop("checked") ) {
      _$("[data-adunit='" + context + "']").addClass("highlighted")
    }
    else {
      _$("[data-adunit='" + context + "']").removeClass("highlighted")
    }
  })

  $(document).on("click", "[data-adunit]", function() {
    inject($(this));
  })

});
