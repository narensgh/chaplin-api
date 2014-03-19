define(['chaplin', 'views/base/view', 'text!templates/navigation.html' ], function(Chaplin, View, template) {
	'use strict';
	var NavigationView = View.extend({
		autoRender : true,
		template : template,
		initialize: function(){
		}
	});
	return NavigationView;

});