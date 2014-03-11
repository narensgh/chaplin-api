define(['views/base/view', 'text!templates/message.html'], function(View, template) {

    'use strict';
var MessageView = View.extend({	
		autoRender : true,
		template : template,
		className : '',
});

return MessageView;
});