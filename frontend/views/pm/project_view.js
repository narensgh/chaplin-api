'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Chaplin = require('chaplin'),
    View = require('../chaplin_view'),
    template = require('../../templates/pm/project.hbs');
var ProjectView = View.extend({
    template: template,
    noWrap: true,
    getTemplateData: function() {
        var data = View.prototype.getTemplateData.call(this),
            url = Chaplin.utils.reverse('todos', {projectId: data.projectId});
        data = _.extend(data, {
            url: url
        });
        return data;
    },
});
module.exports = ProjectView;
