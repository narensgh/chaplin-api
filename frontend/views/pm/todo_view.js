'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    template = require('../../templates/pm/todo.hbs');

var TodoView = View.extend({
    template: template,
    tagName: 'li'
});
module.exports = TodoView;
