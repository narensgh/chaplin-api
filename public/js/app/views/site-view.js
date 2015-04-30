define(['views/base/view', 'text!templates/site.html'], function(View, template) {
    'use strict';

    var SiteView = View.extend({
        container: 'body',
        id: 'site-container',
        regions: {
            friends: '#friends-container',
            messageForm: '#message-form-container',
            message: '#message-container',
            login: '#login-container',
            navigation: "#navigation"
        },
        template: template,
    });

    return SiteView;
});
