'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    TodoModel = require('../../models/pm/todo_model'),
    template = require('../../templates/pm/todo_form.hbs'),
    zebra = {
        addButtonClass: 'addtodo',
        addButtonText: 'Add this to-do',
        addCancelButtonText: 'I\'m done adding to-dos',
        addCancelButtonClass: 'cancelTodoAddForm',
        editButtonClass: 'saveEditTodo',
        editButtonText: 'Save changes',
        editCancelButtonText: 'Cancel',
        editCancelButtonClass: 'cancelTodoEditForm'
    };
var els = {
    addtodo: '#addtodo-',
    tododescription: '#tododescription-',
    todoContainer: '.todo-new'
};

var AddTodoView = View.extend({
    template: template,
    events: {
        'click .addtodo': 'addNewTodo',
        'click .cancelTodoAddForm': 'addTodoButton',
        'click .saveEditTodo': 'updateTodo'
    },
    initialize: function(options) {
        View.prototype.initialize.call(this);
        this.todoListId = options.todoListId;
        if (!this.model) {
            this.model = new TodoModel(options);
            this.setFormValues('new');
            this.action = 'add';
        } else {
            this.setFormValues('edit');
            this.action = 'edit';
        }
        if ($(els.todoContainer).length > 0) {
            this.cancelEditTodo();
        }
    },
    getTemplateData: function() {
        var data = View.prototype.getTemplateData.call(this);
        data = _.extend(data, this.formText);
        return data;
    },
    setFormValues: function(flag) {
        var formText = {};
        if (flag === 'new') {
            formText.addButtonText = zebra.addButtonText;
            formText.addButtonClass = zebra.addButtonClass;
            formText.cancelButtonText = zebra.addCancelButtonText;
            formText.cancelButtonClass = zebra.addCancelButtonClass;
        } else {
            formText.addButtonText = zebra.editButtonText;
            formText.addButtonClass = zebra.editButtonClass;
            formText.cancelButtonText = zebra.editCancelButtonText;
            formText.cancelButtonClass = zebra.editCancelButtonClass;
        }
        formText = _.extend(formText, this.model.attributes);
        this.formText = formText;
    },
    addNewTodo: function() {
        var description = this.$(els.tododescription + this.todoListId).val(),
            todo = new TodoModel({
                description: description,
                todoListId: this.todoListId
            });
        this.saveTodo(todo);
    },
    updateTodo: function() {
        var description = this.$(els.tododescription + this.todoListId).val();
        this.model.set({
            description: description
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
    cancelEditTodo: function() {
        $(els.todoContainer).remove();
        if (this.action === 'edit') {
            this.addTodoButton();
        }
    },
    addTodoButton: function() {
        var todoFormContainer = $(els.addtodo + this.todoListId);
        todoFormContainer.html("<span class=\"add-todo-button\" id=\"addTodoButton-" + this.todoListId + "\">Add a to-do</span>");
        this.undelegateEvents();
    }
});
module.exports = AddTodoView;
