define(['models/base/model'], function(Model) {
  'use strict';

  var Message = Model.extend({
	  
	  sync : function(method, model, options) {
			options.url = this.ApiUrl + "message";
			Backbone.sync.apply(this, arguments);
	  },
	  ele:{
			  sessionUserId: "#sessionUserId",
		  },
	  initialize: function(){
		  Model.prototype.initialize.apply(this, arguments);
	  },
	  fetchData: function(params = {}){
		params.userId = $(this.ele.sessionUserId).val();
		  var fetchedData = this.fetch({
				async: false,
				data: params
		  });
		return this;
	  }
  });
  return Message;
});