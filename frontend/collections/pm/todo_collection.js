'use strict';

var Collection   = require('../chaplin_collection'),
    TodoModel = require('../../models/pm/todo_model');

var TodoCollection = Collection.extend({
    model: TodoModel,
    url:'/taskmanager/application/todo'
});
module.exports = TodoCollection;
