'use strict';
var lib = require('../../');
var assert = require('assert');

describe('index.js', function() {
    describe('add', function() {
        it('should succeed', function() {
            var retval = lib.add(2, 3);
            assert(retval === 5);
        });
    });
});
