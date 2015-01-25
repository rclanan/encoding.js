'use strict';

var htmlEncoder, uriEncoder;

htmlEncoder = require('./definitions/html/htmlEncoder');
uriEncoder = require('./definitions/uriEncoder');

module.exports = {
  html: htmlEncoder,
  uri: uriEncoder
};
