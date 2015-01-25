'use strict';

var encode, decode, encodeComponent, decodeComponent;

encode = function(uri) {
  return encodeURI(uri);
};

decode = function(encodedUri) {
  return decodeURI(encodedUri);
};

encodeComponent = function(uriComponent) {
  return encodeURIComponent(uriComponent);
};

decodeComponent = function(encodedUriComponent) {
  return decodeURIComponent(encodedUriComponent);
};

module.exports = {
  encode: encode,
  decode: decode,
  encodeComponent: encodeComponent,
  decodeComponent: decodeComponent
};
