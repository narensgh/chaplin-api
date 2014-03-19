define(['views/base/view', 'models/message', 'text!templates/message.html'], function(View, MessageModel, template) {

    'use strict';
var MessageView = View.extend({	
		autoRender : true,
		template : template,
		className : '',
});

return MessageView;
});