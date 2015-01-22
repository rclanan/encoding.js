define('hexadecimalDecodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  return codeCompareBase.buildCompareObject({
    codePrefix: '&#',
    codePostfix: ';',
    codeName: 'hexadecimalCode',
    translateFunctionName: 'decode'
  });
});
