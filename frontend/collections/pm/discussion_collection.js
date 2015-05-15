'use strict';

var _            = require('underscore'),
    Collection   = require('../chaplin_collection'),
    DiscussionModel = require('../../models/pm/discussion_model');

var DiscussionCollection = Collection.extend({
    url: '/taskmanager/application/pmdiscussion',
    model: DiscussionModel,
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
        return resp.discussions;
    }
});
module.exports = DiscussionCollection;
