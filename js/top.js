    jQuery(window).on("scroll", function() {
  documentHeight = jQuery(document).height();
  scrollPosition = jQuery(this).height() + jQuery(this).scrollTop();
  footerHeight = jQuery("#copyright").innerHeight();

  if (documentHeight - scrollPosition <= footerHeight) {
    jQuery("#snslink").css({
      position: "absolute",
      bottom: footerHeight + 0
    });
  } else {
    jQuery("#snslink").css({
      position: "fixed",
      bottom: 0
    });
  }
});

// トップへスムーススクロール
$('#pagetop a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 300);
// スクロールするスピード
return false;
});