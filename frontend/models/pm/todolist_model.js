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
    url: '/chaplin-adarsh/sandapi/pmtodolist',
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
    sync: function(method, model, options) {
        options.url = this.url + this.buildParam(method);
        Backbone.sync.apply(this, arguments);
    },
    buildParam: function(method) {
        switch (method) {
            case 'delete':
                return '?todoListId=' + this.get('todoListId');
            case 'create':
                return 'save';
        }
    },
    
});
module.exports = TodoListModel;
