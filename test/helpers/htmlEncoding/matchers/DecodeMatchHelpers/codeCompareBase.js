define('codeCompareBase', ['mixedTextCompareBase', 'singleCodeCompareBase'], function(mixedTextCompareBase, singleCodeCompareBase) {
  'use strict';

  function buildCompareObject(objectCompareDefinition) {

    function buildCodeComparison(compareDecode) {
      return singleCodeCompareBase.buildBaseCompare({
          codePrefix: objectCompareDefinition.codePrefix,
          codeName: objectCompareDefinition.codeName,
          compareDecode: compareDecode
      });
    }

    function buildCompareInMixedText(compareDecode) {
      return mixedTextCompareBase.buildCompareInMixedTextFunction({
        codePrefix: objectCompareDefinition.codePrefix,
        codeName: objectCompareDefinition.codeName,
        compareDecode: compareDecode
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
