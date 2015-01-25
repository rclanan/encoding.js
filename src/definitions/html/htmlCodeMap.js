'use strict';

var htmlDefinitions, encodeBuilderFactory;

htmlDefinitions = require('./definitions/html/htmlDefinitions');
encodeBuilderFactory = require('.definitions/html/encodingUtilities/encodeBuilderFactory');

function buildCodeMap(htmlDefinitions) {
  var encodeObject, encodePrefixes;

  encodePrefixes = {
    decimalCode: '&#',
    hexadecimalCode: '&#',
    names: '&'
  };

  encodeObject = encodeBuilderFactory.buildEncodeBuilder(encodePrefixes);

  htmlDefinitions.forEach(function(definition) {
    encodeObject.addItem({
      name: definition.names[0],
      decimalCode: definition.decimalCode,
      names: definition.names,
      hexadecimalCode: definition.hexadecimalCode
    });
  });

  return encodeObject.codes;
}

module.exports =  {
  buildCodeMap: buildCodeMap
};
