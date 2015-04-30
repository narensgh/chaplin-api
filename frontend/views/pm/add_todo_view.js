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
    tododescription: '#tododescription-'
};

var AddTodoView = View.extend({
    template: template,
    events: {
        'click .addtodo': 'addNewTodo',
        'click .cancelTodoAddForm': 'cancelTodoAddForm'
    },
    initialize: function(options) {
        console.log(this);
        View.prototype.initialize.call(this);
        this.todolistId = options.todolistId;
        if (!this.model) {
            this.model = new TodoModel(options);
            this.setFormValues('new');
        } else {
            this.setFormValues('edit');
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
       var description = this.$(els.tododescription + this.todolistId).val();
        var todo = new TodoModel({
            description: description,
            todoListId: this.todolistId
        });
        console.log('addNewTodo');
        this.saveTodo(todo);
    },
    saveTodo: function(todo) {
        console.log('saveTodo');
        var options = {
            success: function(model, response) {
                if(response.todoId) {
                    this.collection.add(model);
                }
            }.bind(this),
            error:function(model, response) {
                console.log(response);
            }.bind(this)
        };
        todo.save(null, options);
        this.cancelTodoAddForm();
    },
    cancelTodoAddForm: function() {
        var todoFormContainer = $(els.addtodo + this.todolistId);
        todoFormContainer.html("<span class=\"add-todo-button\" id=\"addTodoButton-" + this.todolistId + "\">Add a to-do</span>");
    }
});
module.exports = AddTodoView;
