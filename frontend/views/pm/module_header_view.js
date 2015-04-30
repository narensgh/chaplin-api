'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    View = require('../chaplin_view'),
    template = require('../../templates/pm/module_header.hbs');
var ModuleHeaderView = View.extend({
    template: template,
    className: 'module-header',
    region: 'moduleHeader',
    initialize: function(options) {
        View.prototype.initialize.call(this);
        this.moduleName = options.moduleName;
    },
    render: function(params) {
        View.prototype.render.call(this);
    },
    getTemplateData: function() {
        var data = View.prototype.getTemplateData.call(this);
        data.moduleName = this.moduleName;
        return data;
    }
});
module.exports = ModuleHeaderView;


