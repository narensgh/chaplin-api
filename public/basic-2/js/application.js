define(['chaplin'], function(Chaplin) {
  'use strict';
  var Application = Chaplin.Application.extend({
    title: 'Chaplin Example test Application',
    start: function() {		
      var args = [].slice.call(arguments);
      Chaplin.Application.prototype.start.apply(this, args);
    }
  });
  return Application;
});
