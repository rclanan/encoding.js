define('decimalDecodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  return codeCompareBase.buildCompareObject({
    codePrefix: '&#',
    codeName: 'decimalCode'
  });
});
