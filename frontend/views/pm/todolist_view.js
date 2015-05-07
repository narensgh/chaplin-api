'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    TodosView = require('./todos_view'),
    AddTodoView = require('./add_todo_view'),
    template = require('../../templates/pm/todolist.hbs');

var els = {
    todosContainer: '#todos-',
    todoForm: '#addtodo-'
};
var TodoView = View.extend({
    template: template,
    noWrap: true,
    events: {
        'click .delete-todolist': 'deleteTodolist',
        'click .add-todo-button': 'openAddTodoForm'
    },
    render: function() {
        View.prototype.render.call(this);
        var container = els.todosContainer + this.model.get('todoListId');
        this.subview('todosView', new TodosView({
            collection: this.model.get('todos'),
            el: this.$(container)
        }));
    },
    deleteTodolist: function() {
        var flag = confirm('Are you sure to delete this todo list?');
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
    openAddTodoForm: function() {
        var container = els.todoForm + this.model.get('todoListId');
        new AddTodoView({
            collection: this.model.get('todos'),
            el: this.$(container),
            todolistId: this.model.get('todoListId')
        });
    }

});
module.exports = TodoView;
