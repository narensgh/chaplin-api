/**
 * 
 */
 define(['controllers/base/controller'], function(Controller) {

    'use strict';
var IndexController = Controller.extend({	
	index1: function(params) {
		console.log('index function');
		/*this.model = new HelloWorld();
		this.view = new HelloWorldView({
			model: this.model,
			region: 'main1',
		});*/
    }, 
});

return IndexController;
});