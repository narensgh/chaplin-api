'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    TodoView              = require('./todo_view'),
    template = require('../../templates/pm/todos.hbs');

var els = {
    list: '#todos'
};
var TodosView = CollectionView.extend({
    className: 'todos',
    itemView: TodoView,
//    listSelector: els.list,
    template: template
});
module.exports = TodosView;
