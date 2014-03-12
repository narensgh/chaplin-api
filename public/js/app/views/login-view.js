define(['chaplin', 'views/base/view','models/login', 'text!templates/login.html' ], function(Chaplin, View, LoginModel, template) {

	'use strict';
	var LoginView = View.extend({
		autoRender : true,
		template : template,
		className : 'login-container',
		
		events:{
			"click #sign-in" : 'signIn'
		},
		initialize: function(){
			this.model = new LoginModel();
		},
		signIn: function(){
			var authData = {};
			authData.username = $('#username').val();
			authData.password = $('#password').val();
			this.model.fetch({
				async: false,
				data:{
					authData : authData
				}
			});
			if(this.model.attributes.message ==="success")
			{
				console.log(this.model.attributes.data);
				alert('success');
				var date = new Date();
				 var minutes = 10;
				 date.setTime(date.getTime() + (minutes * 60 * 1000));
				 $.cookie("userId", "Narendra", { expires: date });
				Chaplin.utils.redirectTo('chaplin_api/front/index#wall',  12);
			}
			console.log(this.model);
		}
	});

	return LoginView;
});