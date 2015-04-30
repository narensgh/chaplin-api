'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    TodosView = require('./todos_view'),
    template = require('../../templates/pm/todolist.hbs');

var els = {
    todosContainer: '#todos-'
};
var TodoView = View.extend({
    template: template,
    noWrap: true,
    render: function() {
        View.prototype.render.call(this);
        var container = els.todosContainer + this.model.get('todoListId');
        this.subview('todosView', new TodosView({
            collection: this.model.get('todos'),
            el: this.$(container)
        }));
    }
});
module.exports = TodoView;
