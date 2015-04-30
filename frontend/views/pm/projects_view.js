'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    CollectionView = require('../collection_view'),
    ProjectView              = require('./project_view'),
    template = require('../../templates/pm/projects.hbs');
    
var els = {
    list: '#projects-list'
};
var ProjectsView = CollectionView.extend({
    className: 'projects',
    region: 'content',
    itemView: ProjectView,
    listSelector: els.list,
    template: template
});
module.exports = ProjectsView;
