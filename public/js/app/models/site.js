define(['models/base/model'], function(Model) {
  'use strict';

	  var SiteModel = Model.extend({
		/*sync : function(method, model, options) {
			options.url = this.ApiUrl + "user";
			Backbone.sync.apply(this, arguments);
		},*/
		
		initialize : function() {
			Model.prototype.initialize.apply(this, arguments);
			this.attributes.username = this.username;
		}
	});
	return SiteModel ;
});