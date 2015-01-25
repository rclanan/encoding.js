'use strict';

var htmlEncodeBuilderUtilities = require('./definitions/html/encodingUtilities/htmlEncodeBuilderUtilities');

function encodeBuilderFactory(namedPrefixes) {
  var encodingBuilder;

  encodingBuilder = {
    namedPrefixes: namedPrefixes,
    codes: {
      encodings: [],
      characters: [],
      decodeMap: {},
      encodeMap: {}
    },
    addItem: function (definition){
      var namedPrefix;

      htmlEncodeBuilderUtilities.addEncodeCode({
        name: definition.name,
        decimalCode: definition.decimalCode,
        encodingObject: encodingBuilder.codes
      });

      for(namedPrefix in encodingBuilder.namedPrefixes) {
        htmlEncodeBuilderUtilities.addDecodeCode({
          prefix: encodingBuilder.namedPrefixes[namedPrefix],
          decimalCode: definition.decimalCode,
          code: definition[namedPrefix],
          encodingObject: encodingBuilder.codes
        });
      }
    }
  };

  return encodingBuilder;
}

module.exports = {
  buildEncodeBuilder: encodeBuilderFactory
};
