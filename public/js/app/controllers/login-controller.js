 define(['controllers/base/controller', 'views/login-view'], function(Controller, LoginView) {

    'use strict';
var IndexController = Controller.extend({	
	login: function(params) {
		this.view = new LoginView({
			region: 'login',
		});
    }, 
});

return IndexController;
});