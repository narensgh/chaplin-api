define(['models/base/model'], function(Model) {
  'use strict';

  var Navigation = Model.extend({
	  sync : function(method, model, options) {
			options.url = "http://localhost/chaplin-api/front/index/sessiondata";
			Backbone.sync.apply(this, arguments);
	  },
	  
	  initialize: function(){
		  Model.prototype.initialize.apply(this, arguments);
		  this.fetch({
				async : false,
		  });
	  }
  });
  return Navigation;
});