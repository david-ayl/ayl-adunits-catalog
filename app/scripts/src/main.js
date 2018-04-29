
$(document).ready(function() {

  $(function() {
    $.scrollify({
      section : ".section",
      scrollbars : false,
      before : function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender : function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".section").each(function(i) {
          activeClass = "";
          if(i===0) {
            activeClass = "active";
          }
          pagination += "<li class=\"pagination-" + $(this).attr("data-section-name") + "\"><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
        $("body").append(pagination);
        $(".pagination a").on("click",$.scrollify.move);
      }
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

  $(document)
  .on("click", "[data-adunit]", function() {
    inject($(this));
  })
  .on("click", "[data-anchor]", function() {
    $.scrollify.move("#" + $(this).attr("data-anchor"));
  });

});
