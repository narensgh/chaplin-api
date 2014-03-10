define([
  'chaplin'
], function(Chaplin) {
  'use strict';

  var Model = Chaplin.Model.extend({
	 ApiUrl: "http://localhost/chaplin-api/api/",
     initialize: function() {
  
     }

    // Place your application-specific model features here
  });

  return Model;
});
