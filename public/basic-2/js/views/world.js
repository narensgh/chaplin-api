define(['views/base/view', 'text!templates/world.hbs'], function(View, template) {
  'use strict';

  var WorldView = View.extend({
    template: template,
    autoRender: true,
    tagName : 'li',
  	className : 'post',
    initialize : function(){
    	 //return View.prototype.initialize.apply(this, arguments);
    }
  });
  return WorldView;
});