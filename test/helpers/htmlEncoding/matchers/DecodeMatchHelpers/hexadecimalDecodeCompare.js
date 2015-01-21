define('hexadecimalDecodeCompare', ['codeCompareBase'], function(codeCompareBase) {
  'use strict';

  return codeCompareBase.buildCompareObject({
    codePrefix: '&#',
    codeName: 'hexadecimalCode'
  });
});
