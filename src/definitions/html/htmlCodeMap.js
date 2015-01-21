define(['definitions/html/htmlDefinitions', 'definitions/html/encodingUtilities/encodeBuilderFactory'], function (htmlDefinitions, encodeBuilderFactory) {
  'use strict';

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
});
