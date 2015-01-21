define([
  'definitions/html/htmlEncoder',
  'definitions/uriEncoder'
], function (htmlEncoder, uriEncoder) {
  'use strict';

  return {
    html: htmlEncoder,
    uri: uriEncoder
  };
});
