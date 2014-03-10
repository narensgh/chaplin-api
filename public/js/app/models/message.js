define(['models/base/model'], function(Model) {
  'use strict';

  var Message = Model.extend({
	  url : "http://localhost/chaplin-api/api/message",
	  initialize: function(){
		  Model.prototype.initialize.apply(this, arguments);
	  },
	  /*fetchUsers: function(){
			var users = this.fetch({
					async:false,
				});
			return users.responseJSON;
		}*/
  });

  return Message;
});