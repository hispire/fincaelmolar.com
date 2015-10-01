// Google analytics Tracker
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49334654-5', 'auto');
ga('send', 'pageview');


$(function(){
  //PJAX init
  $(document).pjax('a[data-pjax]', '#data-container');
  $(document).on('pjax:complete', function() {
    console.log('Complete');
          FB.XFBML.parse();
          var url = window.location.href;
          $('.fb-share-button').attr('data-href', url);

  });

  $(window).load(function() {
    // Animate loader off screen
    $("#icon--load").fadeOut("slow");
    $('nav').removeClass('animated zoomIn').addClass('animated zoomIn');
    $('#header').removeClass('animated fadeIn').addClass('animated fadeIn');
  });

});
  // or try to do something like this
  /*function renderTemplate(template) {
   $.ajax({
      type: 'GET',
        url: template,
        success: function (data) {
          //Assuming the returned data is pure HTML
          $(".container").html(data);
          history.pushState({'name': template}, '', template);
        }
    })

  }
  function clickAndRender(element, template) {
    $(document).on('click', element, function(e) {
      var href = $(this).attr("href");
      e.preventDefault();
      renderTemplate(template);
     });
  }
  clickAndRender('#products-link', '/products');
  clickAndRender('.button--close', '/');
  $(window).on("popstate", function () {
    // if the state is the page you expect, pull the name and load it.
    if (history.state) {
      renderTemplate(history.state.name);
    }
});*/
