'use strict';

var Model = require('../chaplin_model'),
    ProjectModel = Model.extend({
        defaults: {
            projectName: '',
            projectId: ''
        }
    });
module.exports = ProjectModel;
