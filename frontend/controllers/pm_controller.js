'use strict';

var Chaplin = require('chaplin'),
        ProjectCollection = require('../collections/pm/project_collection'),
        TodolistCollection = require('../collections/pm/todolist_collection'),
        SiteView = require('../views/site_view'),
        ModuleHeaderView = require('../views/pm/module_header_view'),
        ProjectsView = require('../views/pm/projects_view'),
        TodolistsView = require('../views/pm/todolists_view');

var PmController = Chaplin.Controller.extend({
    initialize: function(params) {
        Chaplin.Controller.prototype.initialize.call(this);
        this.projectCollection = new ProjectCollection();
        this.todoCollection = new TodolistCollection(null, params);
        this.listenTo(this.todoCollection, 'add', this.fetchTodo);
    },
    beforeAction: function(params, route, options) {
        Chaplin.Controller.prototype.beforeAction.call(this);
        this.reuse('siteView', SiteView);
        this.reuse('moduleHeaderView', ModuleHeaderView, {
            moduleName: 'Project Management',
            collection: this.projectCollection 
        });
    },
    // launch app by displaying projects
    index: function(params, route, options) {
        params.peopleId = 1;
        this.projectCollection.fetch(params);
        this.reuse('projectsView', ProjectsView, {
            collection: this.projectCollection
        });
    },
    // launch todo list
    todos: function(params, route, options) {
        this.todoCollection.fetch();
        this.reuse('todolistsView', TodolistsView, {
            collection: this.todoCollection
        });
    },
    fetchTodo: function(model, collection, options) {
        model.get('todos').fetch({
            data: {
                todoListId: model.get('todoListId')
            }
        });
    },
    fetchProjectByParams: function(params) {
        
    },
    renderProjectInfo: function() {
        this.reuse('moduleHeaderView', ModuleHeaderView, {
            collection: this.projectCollection
        });
    }
});
module.exports = PmController;
