define(['views/base/view', 'text!templates/site.html'], function(View, template) {
  'use strict';

  var SiteView = View.extend({
    container: 'body',
    id: 'site-container',
    regions: {
    	 main1: '#main-container',
//    	 main1: '#main-container1'
    },
    template: template
  });

  return SiteView;
});
