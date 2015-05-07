'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');
Backbone.$ = $;
var Chaplin = require('chaplin'),
    Application = Chaplin.Application.extend({
        title: 'Project Management',
        initialize: function(options) {
            Chaplin.Application.prototype.initialize.call(this, options);
        }
    });

$(document).ready(function() {
    new Application({
        root: '/chaplin-api/front/pm/',
        routes: function(match) {
            match('', 'pm#index');
            match('index', 'pm#index');
            match('todos/id/:projectId', 'pm#todos');
            match('todo/id/:todoId', 'pm#todo');
        }
    });
});