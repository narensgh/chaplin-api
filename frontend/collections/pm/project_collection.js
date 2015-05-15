
var _ = require('underscore'),
        Collection = require('../chaplin_collection'),
        ProjectModel = require('../../models/pm/project_model');

var ProjectCollection = Collection.extend({
    url: '/chaplin-adarsh/sandapi/pmproject',
    model: ProjectModel,
    initialize: function(models, options) {
        Collection.prototype.initialize.apply(this, arguments);
    },
    fetch: function(options) {
        this.peopleId = options.peopleId;
        this.projectId = options.projectId;
        options = _.extend(options || {}, {
            data: _.defaults(options && options.data || {}, _.pick(this, 'peopleId', 'projectId'))
        });
        return Collection.prototype.fetch.call(this, options);
    },
    parse: function(resp) {
        return resp.projects;
    }
});
module.exports = ProjectCollection;
