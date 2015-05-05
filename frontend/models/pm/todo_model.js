'use strict';

var Backbone = require('backbone'),
    _ = require('underscore');
var TodoModel = Backbone.RelationalModel.extend({
    defaults: {
        todoListId: '',
        description: '',
        active: true,
        assignedTo: '1'
    },
    idAttribute: 'todoId',
    url: '/chaplin-adarsh/sandapi/pmtodo',
    initialize: function(attrs) {
        this.todoListId = attrs.todolistId;
    },
    sync: function(method, model, options) {
        var idAttribute = {};
        idAttribute.todoId = this.get("todoId");
        options.url = this.url + this.buildParam(method, idAttribute);
        Backbone.sync.apply(this, arguments);
    },
    // overwrite save method to filter out data to not send to the server
    save: function(attrs, options) {
        console.log(attrs, options, this);

        options || (options = {});
        attrs || (attrs = _.clone(this.attributes));
//        options.data = JSON.stringify(attrs);
        // call Backbone save function
        Backbone.Model.prototype.save.call(this, attrs, options);
    
    },
    buildParam: function(method, idAttribute) {
        var response = {};
        switch (method) {
            case 'update':
            case 'delete':
                _.extend(response, idAttribute);
                return '?' + $.param(response);
            case 'create':
                return '';
        }
    }
});
module.exports = TodoModel;
