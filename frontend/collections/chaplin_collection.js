/**
 * base collection
 */

var Chaplin = require('chaplin');
Collection = Chaplin.Collection.extend({
    initialize: function(models, options) {
        options || (options = {});
    }
});
module.exports = Collection;
