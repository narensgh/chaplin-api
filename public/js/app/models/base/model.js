define([ 'chaplin' ], function(Chaplin) {
	'use strict';

	var Model = Chaplin.Model.extend({
		ApiUrl : "http://chaplinapi.com/api/",
		initialize : function() {
		}
	});
	return Model;
});
