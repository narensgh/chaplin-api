'use strict';
var View = require('./chaplin_view');
// SiteView
var SiteView = View.extend({
// Container for this view. Chaplin attribute.
    container: '#content-wrapper',
    noWrap: true,
// ID for container. Backbone attribute.
    id: 'page',
// Regions of the page. Chaplin attribute.
    regions: {
        navigation: '#inner-menu',
        moduleHeader: '#module-header',
        content: '#module-wrapper'
    },
// Handlebars template for the page. Chaplin attribute.
    template: require('../templates/site.hbs')
});
module.exports = SiteView;
