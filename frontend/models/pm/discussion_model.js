'use strict';

var Model = require('../chaplin_model'),
    DiscussionModel = Model.extend({
        defaults: {
            todoId: ''
        }
    });
module.exports = DiscussionModel;
