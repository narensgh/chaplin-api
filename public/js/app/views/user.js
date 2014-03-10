define([ 'views/base/view', 'text!templates/user.html' ], function(View, template) {
	'use strict';

	var UserView = View.extend({
		autoRender : true,
		template : template,
		className : 'nav-sidebar',
	});

	return UserView;
});