/* ==========================================================================
   Document Ready Initializers
   ========================================================================== */

$(document).ready(function () {
  // Style Pandoc tables with Bootstrap classes
  $("tr.odd").parent("tbody").parent("table").addClass("table table-condensed");

  // Handle clicks on dropdown tabsets
  $(".tabset-dropdown > .nav-tabs > li").click(function () {
    $(this).parent().toggleClass("nav-tabs-open");
  });

// Handle clicks on in-text reference links
$('.ref-link').on('click', function(event) {
    event.preventDefault();

    var targetId = $(this).attr('href');

    $('a[href="#references"][data-toggle="tab"]').tab('show');

    setTimeout(function() {
      var targetElement = $(targetId);
      
      if (targetElement.length) {
        $('html, body').animate({
          scrollTop: targetElement.offset().top - 20
        }, 500);
      }
    }, 150);
});

  if (window.hljs) {
    hljs.initHighlightingOnLoad();
  }
});
