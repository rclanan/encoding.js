define('codeCompareBase', ['mixedTextCompareBase', 'singleCodeCompareBase'], function(mixedTextCompareBase, singleCodeCompareBase) {
  'use strict';

  function buildCompareObject(objectCompareDefinition) {

    function buildCodeComparison(compareTranslated) {
      return singleCodeCompareBase.buildBaseCompare({
          codePrefix: objectCompareDefinition.codePrefix,
          codePostfix: objectCompareDefinition.codePostfix,
          codeName: objectCompareDefinition.codeName,
          compareTranslated: compareTranslated,
          translateFunctionName: objectCompareDefinition.translateFunctionName
      });
    }

    function buildCompareInMixedText(compareTranslated) {
      return mixedTextCompareBase.buildCompareInMixedTextFunction({
        codePrefix: objectCompareDefinition.codePrefix,
        codePostfix: objectCompareDefinition.codePostfix,
        codeName: objectCompareDefinition.codeName,
        compareTranslated: compareTranslated,
        translateFunctionName: objectCompareDefinition.translateFunctionName
      });
    }

    return {
      buildCompareFunction: buildCodeComparison,
      buildCompareInMixedTextFunction: buildCompareInMixedText
    };
  }

  return {
    buildCompareObject: buildCompareObject
  };
});
