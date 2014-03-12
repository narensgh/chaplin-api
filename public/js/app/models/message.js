define(['models/base/model'], function(Model) {
  'use strict';

  var Message = Model.extend({
	  sync : function(method, model, options) {
			options.url = this.ApiUrl + "message";
			Backbone.sync.apply(this, arguments);
	  },
	  
	  initialize: function(){
		  Model.prototype.initialize.apply(this, arguments);
		  this.fetch({
				async : false,
		  });
	  }
  });
  return Message;
});