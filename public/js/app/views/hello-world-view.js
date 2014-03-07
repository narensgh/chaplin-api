define(['views/base/view', 'text!templates/hello-world.html'], function(View, template) {
  'use strict';

  var HelloWorldView = View.extend({
    autoRender: true,
    template: template,
    className: 'hello-world-1',
  });
  return HelloWorldView;
});
