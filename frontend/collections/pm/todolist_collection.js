'use strict';

var _            = require('underscore'),
    Collection   = require('../chaplin_collection'),
    TodolistModel = require('../../models/pm/todolist_model');

var TodolistCollection = Collection.extend({
    url: '/taskmanager/application/todolist',
    model: TodolistModel,
    initialize: function(models, options) {
        Collection.prototype.initialize.apply(this, arguments);
        
        this.projectId = options.projectId;
        this.todo= options.todo;
    },
    fetch: function(options) {
        options = _.extend(options || {}, {
            data: _.defaults(options && options.data || {}, _.pick(this, 'projectId', 'todo'))
        });
        return Collection.prototype.fetch.call(this, options);
    },
    parse: function(resp) {
        return resp;
    }
});
module.exports = TodolistCollection;
