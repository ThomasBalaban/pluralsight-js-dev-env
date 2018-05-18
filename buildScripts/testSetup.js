// this file isnt transpiled, so must use common js and es 5

//register babel to transpile before test run
require('babel-register')();

//disable webpack features mocha doesnt get
require.extensions['css'] = function() {};
