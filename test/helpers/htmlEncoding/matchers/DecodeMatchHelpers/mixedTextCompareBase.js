define('mixedTextCompareBase', ['mixedTextGenerator'], function(mixedTextGenerator) {
  'use strict';

  function buildCompareInMixedText(mixedTextDefinition) {
    return function (given) {
      var decoded, result,  mixedTextItem;

      mixedTextItem = {
        code: mixedTextDefinition.codePrefix + given[mixedTextDefinition.codeName] + ';',
        expected: given.expectedCharacter
      };

      mixedTextItem = mixedTextGenerator.generateMixedText(mixedTextItem);

      decoded = given.encoding.html.decode(mixedTextItem.code);

      result = mixedTextDefinition.compareDecode({
        actual: mixedTextItem.code,
        expectedDefinition: mixedTextItem.expected,
        translated: decoded
      });

      return result;
    };
  }

  return {
    buildCompareInMixedTextFunction: buildCompareInMixedText
  };
});
