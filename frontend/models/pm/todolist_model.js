'use strict';

var $ = require('jquery'), 
Backbone = require('backbone'),
    relBackbone = require('backbone-relational'),
    TodoCollection = require('../../collections/pm/todo_collection'),
    TodoModel = require('./todo_model');
var TodoListModel = Backbone.RelationalModel.extend({
    defaults: {
        todoListId: '',
        listname: '',
        projectId: '1'
    },
    idAttribute: 'todoListId',
    relations: [{
            type: Backbone.HasMany,
            key: 'todos',
            relatedModel: TodoModel,
            collectionType: TodoCollection,
            
            reverseRelation: {
                key: 'todoList',
                includeInJSON: 'todoListId'
            }
        }],
    urlRoot: function() {
        return this.apiBaseUrl + "todolist";
    }
});
module.exports = TodoListModel;
