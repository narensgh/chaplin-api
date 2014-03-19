define(['chaplin', 'views/site-view', 'models/navigation', 'views/navigation-view'], function(Chaplin, SiteView, NavigationModel, NavigationView) {
  'use strict';

  var Controller = Chaplin.Controller.extend({
	sessionData : {},
    beforeAction: function() {    	
      this.reuse('site', SiteView);
      this.checkSession();
    },
    checkSession: function(){
    	var navigationModel = new NavigationModel(); 
    	this.view = new NavigationView({
    		model: navigationModel,
			region: 'navigation',
    	});
    	
    }
  });

  return Controller;
});
