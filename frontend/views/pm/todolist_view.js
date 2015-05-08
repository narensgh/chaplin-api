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
        'click .add-todo-button': 'openAddTodoForm',
        'change .todo-check': 'toggleCompleted',
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
    toggleCompleted: function(e) {
        var todoStatus = {},
            todoId = e.target.id.split('-')[2],
            todo = this.model.get('todos').findWhere({todoId: Number(todoId)}),
            confirmMsg = "Todo will be marked as ",
			options = {
				success: function(model, response) {
					console.log("Updated Successfully..");
				}.bind(this), 
				error: function(model, response) {
					console.log("Error occurred while Updating");
				}.bind(this)
			};
        if (todo.get('active') === true) {
            confirmMsg += "completed.. !!";
            todoStatus.active = false;
        } else {
            confirmMsg += "active.. !!";
            todoStatus.active = true;
        }
        if (confirm(confirmMsg)) {
            todo.set(todoStatus);
            todo.save(null, options);
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
