'use strict';

var Model = require('../chaplin_model'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    ProjectModel = Model.extend({
        defaults: {
            projectName: '',
            projectId: ''
        },
        url: '/taskmanager/application/pmproject',
        initialize: function(options) {
            this.projectId = options.projectId;
        },
        sync: function(method, model, options) {
            var idAttribute = {};
            idAttribute.projectId = this.get("projectId");
            options.url = this.url + this.buildParam(method, idAttribute);
            Backbone.sync.apply(this, arguments);
        },
        buildParam: function(method, idAttribute) {
            var response = {};
            switch (method) {
                case 'update':
                case 'read':
                case 'delete':
                    _.extend(response, idAttribute);
                    return '?' + $.param(response);
                case 'create':
                    return '';
            }
        },
        parse: function(resp) {
            if(resp.projects){
                return resp.projects;
            }
            return resp;
        }
    });
module.exports = ProjectModel;

