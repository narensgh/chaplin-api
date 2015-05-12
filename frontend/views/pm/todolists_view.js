'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    TodolistView              = require('./todolist_view'),
    template = require('../../templates/pm/todolists.hbs'),
    els = {
        loading : '#loading'
    };
var TodolistsView = CollectionView.extend({
    className: 'todo-list',
    region: 'content',
    itemView: TodolistView,
//    loadingSelector: els.loading,
    autoRender: true,
    template: template
});
module.exports = TodolistsView;
