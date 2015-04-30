'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    ProjectView              = require('./project_view'),
    template = require('../../templates/pm/projects.hbs'),
    els = {
        loading : '#loading'
    };
var ProjectsView = CollectionView.extend({
    className: 'projects',
    region: 'content',
    itemView: ProjectView,
    loadingSelector: els.loading,
    template: template,

    // Override Chaplin's toggleLoadingIndicator to always show the loader bar
    // when syncing (not just when collection is empty)
    toggleLoadingIndicator: function() {
        this.$loading.toggle(this.collection.isSyncing());
    }
});
module.exports = ProjectsView;
