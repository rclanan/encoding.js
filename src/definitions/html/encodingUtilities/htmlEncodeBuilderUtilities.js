define([
  'definitions/html/encodingUtilities/addEncodeCode',
  'definitions/html/encodingUtilities/addDecodeCode'  
  ], function(addEncodeCode, addDecodeCode) {
  'use strict';

  return {
    addDecodeCode: addDecodeCode.addDecodeCode,
    addEncodeCode: addEncodeCode.addEncodeCode
  };
});
