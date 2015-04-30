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
        root: '/chaplin-adarsh/frontline/apps/',
        routes: function(match) {
            match('pm', 'pm#index');
            match('pm/id/:projectId', 'pm#todo');
        }
    });
});