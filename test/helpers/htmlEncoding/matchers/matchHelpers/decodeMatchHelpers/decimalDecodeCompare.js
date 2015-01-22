define('decimalDecodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  return codeCompareBase.buildCompareObject({
    codePrefix: '&#',
    codePostfix: ';',
    codeName: 'decimalCode',
    translateFunctionName: 'decode'
  });
});
