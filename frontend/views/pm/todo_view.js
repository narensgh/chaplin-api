'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    AddTodoView = require('./add_todo_view'),
    template = require('../../templates/pm/todo.hbs'),
    els = {
        editTodoForm: '#edit-todo-container-'
    };
var TodoView = View.extend({
    template: template,
    events: {
        'click .delete-todo': 'deleteTodo',
        'click .edit-todo': 'openEditTodoForm'
    },
    initialize: function() {
        View.prototype.initialize.call(this);
        this.listenTo(this.model, 'change', this.render);
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
    },
    openEditTodoForm: function() {
        var container = els.editTodoForm + this.model.get('todoId');
        new AddTodoView({
            model: this.model,
            el: this.$(container),
            todoListId: this.model.get('todoListId')
        });
    }
});
module.exports = TodoView;
