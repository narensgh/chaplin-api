'use strict';

var $ = require('jquery'),
        _ = require('underscore'),
        View = require('../chaplin_view'),
        template = require('../../templates/pm/project.hbs');
var ProjectView = View.extend({
    template: template,
    noWrap:true
});
module.exports = ProjectView;
