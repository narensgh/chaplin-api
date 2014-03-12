/**
 * 
 */

 define(['controllers/base/controller','models/user', 'models/message', 'views/user', 'views/messageForm', 'views/message-view'], function(Controller, UserModel, MessageModel, UserView, MessageForm, MessageView) {

    'use strict';
var UserController = Controller.extend({	
	wall: function(params) {
		var param = jQuery.parseJSON(decodeURIComponent(params.params));
		var userModel = new UserModel();
		this.view = new UserView({
			model: userModel,
			region: 'friends',
		});
		this.view = new MessageForm({
			region: 'messageForm',
		});
		var messageModel = new MessageModel();
		var messageData = messageModel.fetch({
				async:false,
				data: {
					'userId': param.userId
				},
			});
		messageModel.attributes.messages = messageData.responseJSON;
		console.log(messageModel.attributes.messages);
		this.view = new MessageView({
			model : messageModel,
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