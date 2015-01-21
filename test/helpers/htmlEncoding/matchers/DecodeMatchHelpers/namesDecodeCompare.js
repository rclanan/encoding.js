define('namesDecodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  var baseCompareObject;

  function getUltimateResults(results) {
    var i;
    for(i = 0; i < results.length; i += 1) {
      if(!results[i].passed) {
        return results[i];
      }
    }

    return results[0];

  }

  function buildCompareMany(compareFunction) {
    return function (given) {
      var results, result;
      results = [];
      given.names.forEach(function(name){
        results.push(compareFunction({
          name: name,
          expectedCharacter: given.expectedCharacter,
          encoding: given.encoding
        }));
      });

      result = getUltimateResults(results);
      return result;
    };
  }

  baseCompareObject = codeCompareBase.buildCompareObject({
    codePrefix: '&',
    codeName: 'name'
  });


  function buildNamesDecodeComparison(compareDecode) {
    var checkNameDecode;
    checkNameDecode = baseCompareObject.buildCompareFunction(compareDecode);

    // this builds, so we need to abstract it a tad...
    return buildCompareMany(checkNameDecode);
  }

  function buildMixedInTextDecodeComparison(compareDecode) {
    var checkNameMixedTextDecode;
    checkNameMixedTextDecode = baseCompareObject.buildCompareInMixedTextFunction(compareDecode);

    return buildCompareMany(checkNameMixedTextDecode);
  }



  return {
    buildCompareFunction: buildNamesDecodeComparison,
    buildCompareInMixedTextFunction: buildMixedInTextDecodeComparison
  };
});
