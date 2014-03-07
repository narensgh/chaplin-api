define([ 'chaplin', 'models/base/model' ],function(Chaplin, Model) {
	'use strict';

	var HelloWorld = Model.extend({
//		defaults : {
//			message1 : 'This is test from Narendra! tested.....'
//		},
		url : "http://localhost/restapi-backbone/api/release",
//		url : "http://192.168.0.57:5050/vectorapi/releasenew/index?dimReleaseFlag=false&limit=10&access_token=e4175e397f5f98506250bd2817e87920&vendorId=17123",
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
