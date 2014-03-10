define([
  'models/base/model'
], function(Model) {
  'use strict';

  var User = Model.extend({
	  url : "http://localhost/chaplin-api/api/user",
	  initialize: function(){
		  Model.prototype.initialize.apply(this, arguments);
		  var users = this.fetchUsers();
			this.attributes.users = users;
	  },
	  fetchUsers: function(){
			var users = this.fetch({
					async:false,
				});
			return users.responseJSON;
		}
  });

  return User;
});