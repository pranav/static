(function() {
  $(window).bind("load", function() {
    return $('.logo').bigtext({
      'resize': false
    });
  });

  $(window).bind("page:load", function() {
    return $('.logo').bigtext({
      'resize': false
    });
  });

}).call(this);
