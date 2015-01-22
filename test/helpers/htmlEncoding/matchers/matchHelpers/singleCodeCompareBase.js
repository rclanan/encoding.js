define('singleCodeCompareBase', [], function() {
  'use strict';


  function buildBaseCompare(compareDefinition) {
    return function (given) {
      var translated, result, code;

      code = compareDefinition.codePrefix + given[compareDefinition.codeName] + compareDefinition.codePostfix;
      translated = given.encoding.html[compareDefinition.translateFunctionName](code);

      result = compareDefinition.compareTranslated({
        actual: code,
        expectedDefinition: given.expectedCharacter,
        translated: translated
      });

      return result;
    };
  }

  return {
    buildBaseCompare: buildBaseCompare
  };
});
