'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    template = require('../../templates/pm/todo_detail.hbs');

var els = {
};

var TodoDetailView = View.extend({
    template: template,
    getTemplateData: function() {
        var data = View.prototype.getTemplateData.call(this);
        return data[0];
    }    
});
module.exports = TodoDetailView;
