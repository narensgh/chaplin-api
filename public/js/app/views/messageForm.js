define([ 'views/base/view','models/message', 'text!templates/MessageForm.html' ], function(View, MessageModel, template) {
	'use strict';

	var MessageFormView = View.extend({
		autoRender : true,
		template : template,
		className : 'message-form',
		events:{
				'click #submit-post' : 'saveMessage',
			},
		initialize: function(){
			this.model = new MessageModel();
		},
		saveMessage: function(){
			var message= {};
			var messageText = "test message from Narendra";
			var toId = 5;
			var fromId = 12;
			message.messageText = messageText;
			message.toId = toId;
			message.fromId = fromId;
			console.log(message);
			this.model.save(message);
		}
		
	});
	return MessageFormView;
});