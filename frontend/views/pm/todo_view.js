'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    template = require('../../templates/pm/todo.hbs');

var TodoView = View.extend({
    template: template,
    noWrap: true,
    events: {
        'click .delete-todo': 'deleteTodo'
    },
    deleteTodo: function() {
        var flag = confirm('Are you sure to delete this todo?');
        if (flag) {
            this.model.destroy({
                success: function(model, response) {
                    console.log('deleted successfully..!!');
                },
                error: function(model, response) {
                    console.log('Error occured..!!');
                },
                wait: true
            });
        }
    }
});
module.exports = TodoView;
