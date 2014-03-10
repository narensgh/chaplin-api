/**
 * 
 */
 define(['controllers/base/controller','models/user', 'views/user'], function(Controller, UserModel, UserView) {

    'use strict';
var IndexController = Controller.extend({	
	index: function(params) {
		this.model = new UserModel();
		this.view = new UserView({
			model: this.model,
			region: 'friends',
		});
    }, 
});

return IndexController;
});