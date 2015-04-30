'use strict';

var Chaplin = require('chaplin'),
    ProjectCollection = require('../collections/pm/project_collection'),
    TodolistCollection = require('../collections/pm/todolist_collection'),
    SiteView = require('../views/site_view'),
    ProjectsView = require('../views/pm/projects_view'),
    TodolistsView = require('../views/pm/todolists_view');

var PmController = Chaplin.Controller.extend({
    initialize: function(params) {
        Chaplin.Controller.prototype.initialize.call(this);     
        this.todoCollection = new TodolistCollection(null, params);
        this.listenTo(this.todoCollection, 'add', this.fetchTodo);
    },
    beforeAction: function(params, route, options) {
        Chaplin.Controller.prototype.beforeAction.call(this);
        this.reuse('siteView', SiteView);
    },
    // launch app by displaying projects
    index: function(params, route, options) {
        //initialize project collection with peopleId
        var projects = new ProjectCollection(null, {peopleId: 1});
        //fetch projects 
        projects.fetch();
        
        this.reuse('projectsView', ProjectsView, {
            collection: projects
        });
    },
    // launch todo list
    todo: function(params, route, options) {
        this.todoCollection.fetch();
        this.reuse('todolistsView', TodolistsView, {
            collection: this.todoCollection
        });
    },
    fetchTodo: function(model, collection, options){
        var todoListId = model.get('todoListId');
        model.get('todos').fetch({
            data: {
                todoListId: todoListId
            }
        }); 
    }
});
module.exports = PmController;