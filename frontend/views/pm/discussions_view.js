'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    DiscussionView = require('./discussion_view');
var DiscussionsView = CollectionView.extend({
    className: 'discussion',
    region: 'content',
    itemView: DiscussionView,
    initialize: function(options) {
        CollectionView.prototype.initialize.call(this);
    }
});
module.exports = DiscussionsView;
