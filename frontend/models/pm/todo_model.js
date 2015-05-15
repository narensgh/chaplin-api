'use strict';

var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');
var TodoModel = Backbone.RelationalModel.extend({
    defaults: {
        todoListId: '',
        description: '',
        active: true,
        assignedTo: '1'
    },
    idAttribute: 'todoId',
    url: '/chaplin-adarsh/sandapi/todo',
    initialize: function(options) {
        this.todoId = options.todoId;
    },
    sync: function(method, model, options) {
        var idAttribute = {};
        idAttribute.todoId = this.get("todoId");
        options.url = this.url + this.buildParam(method, idAttribute);
        Backbone.sync.apply(this, arguments);
    },
    buildParam: function(method, idAttribute) {
        var response = {};
        switch (method) {
            case 'update':
            case 'delete':
                _.extend(response, idAttribute);
                return '?' + $.param(response);
            case 'create':
                return '';
        }
    }
});
module.exports = TodoModel;
