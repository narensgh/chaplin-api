define(function() {
  'use strict';
  return function(match) {
	  var routeBase = 'chaplin-api/';
	  match(routeBase + 'front/index', 'index#index');
	  match(routeBase + 'front/index/wall/:params', 'user#wall');
	  return match(routeBase + 'front/index/timeline', 'user#timeline');
  };
});
