'use strict';

var _ = require('lodash'),
    utilities = require('./utilities');

process.env.NODE_ENV = ~utilities.walk('./config/env', /(.*)\.js$/).map(function (file) {
    return file.split('/').pop().slice(0, -3);
}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

// Load app configurations
module.exports = _.extend(
    require('./env/all'),
    require('./env/' + process.env.NODE_ENV) || {}
);
