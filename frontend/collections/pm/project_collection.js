
var _            = require('underscore'),
    Collection   = require('../chaplin_collection'),
    ProjectModel = require('../../models/pm/project_model');

var ProjectCollection = Collection.extend({
    url: '/taskmanager/application/pmproject',
    model: ProjectModel,
    initialize: function(models, options) {
        Collection.prototype.initialize.apply(this, arguments);
        this.peopleId = options.peopleId;
    },
    fetch: function(options) {
        options = _.extend(options || {}, {
            data: _.defaults(options && options.data || {}, _.pick(this, 'peopleId'))
        });
        return Collection.prototype.fetch.call(this, options);
    },
    parse: function(resp) {
        return resp;
    }
});
module.exports = ProjectCollection;
