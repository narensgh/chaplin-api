/**
 * 
 */

 define(['controllers/base/controller','models/user', 'views/user', 'views/messageForm'], function(Controller, UserModel, UserView, MessageForm) {

    'use strict';
var UserController = Controller.extend({	
	wall: function(params) {
		this.model = new UserModel();
		this.view = new UserView({
			model: this.model,
			region: 'friends',
		});
		this.view = new MessageForm({
			region: 'messageForm',
		});
		this.view = new Messages({
			region: 'message',
		});
    }, 
    timeline: function(params) {
		console.log('timeline function');
		this.model = new UserModel();
		this.view = new UserView({
			model: this.model,
			region: 'main',
		});
    }, 
});

return UserController;
});