'use strict';

var _       = require('underscore'),
    Chaplin = require('chaplin'),
    View    = require('./chaplin_view');

var CollectionView = Chaplin.CollectionView.extend({
        getTemplateFunction: View.prototype.getTemplateFunction,
        getTemplateData: function () {
        var data = Chaplin.CollectionView.prototype.getTemplateData.call(this);
        _.extend(data, this.collection.attributes);
        return data;
    }
});

module.exports = CollectionView;
