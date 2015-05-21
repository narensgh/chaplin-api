'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    ProjectView = require('./project_view'),
    projectFormView = require('./project_form_view'),
    template = require('../../templates/pm/projects.hbs'),
    els = {
        loading: '#loading',
        list: '#project-container',
        newProject: '#new-project'
    };
var ProjectsView = CollectionView.extend({
    className: 'projects',
    region: 'content',
    itemView: ProjectView,
    listSelecttor:els.list,
    loadingSelector: els.loading,
    template: template,
    events :{
        'click #project-new': 'openProjectForm'
    },
    // Override Chaplin's toggleLoadingIndicator to always show the loader bar
    // when syncing (not just when collection is empty)
    toggleLoadingIndicator: function() {
        this.$loading.toggle(this.collection.isSyncing());
    },
    openProjectForm: function() {
         this.subview('projectFormView', new projectFormView({
             collection: this.collection,
             el: this.$(els.newProject)
         }));
    }
});
module.exports = ProjectsView;
