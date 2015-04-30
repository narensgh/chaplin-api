'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    TodolistView              = require('./todolist_view'),
    template = require('../../templates/pm/todolists.hbs');
	
	    
var els = {
    list: '#todolists'
};
var TodosView = CollectionView.extend({
    className: 'todolists',
    region: 'content',
    itemView: TodolistView,
    listSelector: els.list,
    autoRender: true,
    template: template,
    initialize: function(options) {
        CollectionView.prototype.initialize.apply(this, options);
    }
});
module.exports = TodosView;
