define(['models/base/model'], function(Model){
	'use strict',
	
	LoginModel = Model.extend({
		url : "http://localhost/chaplin-api/api/authenticate",
		initialize: function(){
			  Model.prototype.initialize.apply(this, arguments);
		  },
	});
	return LoginModel;
});