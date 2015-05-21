'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    TodoModel = require('../../models/pm/todo_model'),
    template = require('../../templates/pm/todo_form.hbs');
var els = {
    addtodo: '#addtodo-',
    tododescription: '#tododescription-',
    tododuedate: '#tododuedate-',
    todoContainer: '.todo-new'
};

var ProjectFormView = View.extend({
    template: template,
    events: {
        'click .addtodo': 'addNewTodo',
        'click .saveEditTodo': 'updateTodo',
        'click .cancelTodoAddForm': 'addTodoButton'
    },
    initialize: function(options) {
        View.prototype.initialize.call(this);
    },
    getTemplateData: function() {
        var data = View.prototype.getTemplateData.call(this);
    },
    addNewTodo: function() {
        var description = this.$(els.tododescription + this.todoListId).val(),
             tododuedate = this.$(els.tododuedate + this.todoListId).val(),
            todo = new TodoModel({
                description: description,
                dueOn: tododuedate,
                todoListId: this.todoListId
            });
        this.saveTodo(todo);
    },
    updateTodo: function() {
        var description = this.$(els.tododescription + this.todoListId).val(),
            tododuedate = this.$(els.tododuedate + this.todoListId).val();
        this.model.set({
            description: description,
            dueOn: tododuedate
        });
        this.model.save();
        this.cancelEditTodo();
    },
    saveTodo: function(todo) {
        var options = {
            success: function(model, response) {
                if (response.todoId) {
                    this.collection.add(model);
                }
            }.bind(this),
            error: function(model, response) {
                console.log(response);
            }.bind(this)
        };
        todo.save(null, options);
        this.addTodoButton();
    },
    addTodoButton: function() {
        var todoFormContainer = $(els.addtodo + this.todoListId);
        todoFormContainer.html("<span class=\"add-todo-button\" id=\"addTodoButton-" + this.todoListId + "\">Add a to-do</span>");
        this.undelegateEvents();
    },
});
module.exports = ProjectFormView;



