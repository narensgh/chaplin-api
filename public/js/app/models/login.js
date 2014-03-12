define(['models/base/model'], function(Model){
	'use strict',
	
	LoginModel = Model.extend({
		sync : function(method, model, options) {
			options.url = this.ApiUrl + "authenticate";
			Backbone.sync.apply(this, arguments);
		},
		
		initialize: function(){
			  Model.prototype.initialize.apply(this, arguments);
		}
	});
	return LoginModel;
});