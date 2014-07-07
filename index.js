'use strict';

var gss     = require('./lib/gss'),
    fs      = require('fs'),
    util    = require('util');

gss.parse(fs.readFileSync('test/_buttons.scss', {'encoding': 'utf8'}), {},
  function(obj) {
    console.log(util.inspect(obj));
  });