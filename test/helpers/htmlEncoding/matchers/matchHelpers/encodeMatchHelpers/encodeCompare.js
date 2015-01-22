define('encodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  return codeCompareBase.buildCompareObject({
    codePrefix: '',
    codePostfix: '',
    codeName: 'character',
    translateFunctionName: 'encode'
  });
});
