'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    DiscussionView = require('./discussion_view'),
    TodoDetailView = require('./todo_detail_view'),
    template = require('../../templates/pm/discussions.hbs');
var els = {
    todoDetail: '#todo-detail',
    list:  '#discussion-content'
};
var DiscussionsView = CollectionView.extend({
    template: template,
    className: 'discussion',
    listSelector: els.list,
    region: 'content',
    itemView: DiscussionView,
    initialize: function(options) {
        this.todo = options.todo;
        this.listenTo(this.todo, 'sync', this.renderTodoDetail);
        CollectionView.prototype.initialize.call(this);
    },
    renderTodoDetail: function() {
        this.subview('tododetailView', new TodoDetailView({
            el: this.$(els.todoDetail),
            model: this.todo
        }));
    }
});
module.exports = DiscussionsView;
