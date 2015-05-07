'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    DiscussionView = require('./discussion_view'),
    template = require('../../templates/pm/discussion.hbs');
var DiscussionView = View.extend({
    template: template,
    initialize: function(options) {
        View.prototype.initialize.call(this);
    }
});
module.exports = DiscussionView;
