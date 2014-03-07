define([ 'chaplin', 'models/base/model' ],function(Chaplin, Model) {
	'use strict';

	var HelloWorld = Model.extend({
//		defaults : {
//			message1 : 'This is test from Narendra! tested.....'
//		},
		url : "http://localhost/restapi-backbone/api/release",
		initialize : function(attributes, options) {
			Model.prototype.initialize.apply(this, arguments);
			var releaseData = this.fetchReleaseData();
			this.attributes.releaseData = releaseData;		
		},
		fetchReleaseData: function(){
			var releaseData = this.fetch({
					async:false,
				});
			return releaseData.responseJSON;
		}
	});
	return HelloWorld;
});
