/**
 * 
 */

 define(['controllers/base/controller','models/user', 'models/message', 'views/user', 'views/messageForm', 'views/message-view'], function(Controller, UserModel, MessageModel, UserView, MessageForm, MessageView) {

    'use strict';
var UserController = Controller.extend({	
	wall: function(params) {		
		var userModel = new UserModel();
		this.view = new UserView({
			model: userModel,
			region: 'friends',
		});
		this.view = new MessageForm({
			region: 'messageForm',
		});
		var messageModel = new MessageModel();
		var paramData = {};
		if(params.params){
			paramData = this.processParams(params.params);
		}
		messageModel = messageModel.fetchData(paramData);
		this.view = new MessageView({
			model: messageModel,
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
	processParams: function(params){
		var paramObj = {};
		var keyValPair = null;
		var values = params.split("&");
		$.each(values, function(index, data){
			keyValPair = data.split("=");
			paramObj[keyValPair[0]] = keyValPair[1]; 
		});
		return paramObj;
	}
});

return UserController;
});