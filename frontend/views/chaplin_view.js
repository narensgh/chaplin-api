'use strict';

var Chaplin = require('chaplin');
var View = Chaplin.View.extend({
    autoRender: true,
    getTemplateFunction: function() {
        return this.template;
    }
});
module.exports = View;
