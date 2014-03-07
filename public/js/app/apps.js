/**
 * Config for 
 */
requirejs.config({
	paths : {
		jquery : 'lib/jquery',
		underscore : 'lib/lodash',
		backbone : 'lib/backbone',
		handlebars : 'lib/handlebars',
		text : 'lib/text',
		chaplin : 'lib/chaplin',
	},
	shim : {
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		handlebars : {
			exports : 'Handlebars'
		}
	}
});



 // Bootstrap the application
  require(['application', 'routes'], function(Application, routes) {
    	new Application({routes: routes, controllerSuffix: '-controller', 'root' : '/js/'});
  });