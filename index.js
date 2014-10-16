'use strict';

var spud = require('spud');
var through = require('through2');

module.exports = function transformContent(file) {
    if (/\.properties/.test(file)) {
        var buf = '';

        return through(function(chunk, enc, next) {
            buf += chunk.toString();
            next();
        }, function () {
            this.push('module.exports = ' + JSON.stringify(spud.parse(buf)) + ';');
            this.push(null);
        });
    } else {
        return through();
    }
};
