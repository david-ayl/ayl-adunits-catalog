
function scrollToAnchor(aid){
  $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
}
