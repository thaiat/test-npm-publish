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

    describe('sub', function() {
        it('should succeed', function() {
            var retval = lib.sub(10, 2);
            assert(retval === 8);
        });
    });

    describe('multiply', function() {
        it('should succeed', function() {
            var retval = lib.multiply(5, 3);
            assert(retval === 15);
        });
    });
});
