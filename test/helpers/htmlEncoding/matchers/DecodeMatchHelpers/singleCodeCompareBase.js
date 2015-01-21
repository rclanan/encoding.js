define('singleCodeCompareBase', [], function() {
  'use strict';


  function buildBaseCompare(compareDefinition) {
    return function (given) {
      var decoded, result, code;

      code = compareDefinition.codePrefix + given[compareDefinition.codeName] + ';';
      decoded = given.encoding.html.decode(code);

      result = compareDefinition.compareDecode({
        actual: code,
        expectedDefinition: given.expectedCharacter,
        translated: decoded
      });

      return result;
    };
  }

  return {
    buildBaseCompare: buildBaseCompare
  };
});
