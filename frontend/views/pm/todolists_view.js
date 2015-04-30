'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    TodolistView              = require('./todolist_view'),
    template = require('../../templates/pm/todolists.hbs'),
    els = {
        loading : '#loading'
    };
var TodosView = CollectionView.extend({
    className: 'todo-list',
    region: 'content',
    itemView: TodolistView,
//    loadingSelector: els.loading,
    autoRender: true,
    template: template,
    initialize: function(options) {
        CollectionView.prototype.initialize.apply(this, options);
    }
});
module.exports = TodosView;
