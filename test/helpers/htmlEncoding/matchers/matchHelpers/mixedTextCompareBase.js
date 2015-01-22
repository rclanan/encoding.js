define('mixedTextCompareBase', ['mixedTextGenerator'], function(mixedTextGenerator) {
  'use strict';

  function buildCompareInMixedText(mixedTextDefinition) {
    return function (given) {
      var translated, result,  mixedTextItem;

      mixedTextItem = {
        code: mixedTextDefinition.codePrefix + given[mixedTextDefinition.codeName] + mixedTextDefinition.codePostfix,
        expected: given.expectedCharacter
      };

      mixedTextItem = mixedTextGenerator.generateMixedText(mixedTextItem);

      translated = given.encoding.html[mixedTextDefinition.translateFunctionName](mixedTextItem.code);

      result = mixedTextDefinition.compareTranslated({
        actual: mixedTextItem.code,
        expectedDefinition: mixedTextItem.expected,
        translated: translated
      });

      return result;
    };
  }

  return {
    buildCompareInMixedTextFunction: buildCompareInMixedText
  };
});
