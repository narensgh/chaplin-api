'use strict';

var _ = require('underscore'), 
    Collection   = require('../chaplin_collection'),
    TodoModel = require('../../models/pm/todo_model');

var TodoCollection = Collection.extend({
    model: TodoModel,
    url:'/taskmanager/application/todo',
    initialize: function(models, options) {
        Collection.prototype.initialize.apply(this, arguments);
        
        this.todoId = options.todoId;
    },
    fetch: function(options) {
        options = _.extend(options || {}, {
            data: _.defaults(options && options.data || {}, _.pick(this, 'todoId'))
        });
        return Collection.prototype.fetch.call(this, options);
    },
    parse: function(resp) {
        return resp.todos;
    }
});
module.exports = TodoCollection;
