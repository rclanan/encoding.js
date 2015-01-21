define(['definitions/html/encodingUtilities/functionArrayUtilities'], function(functionArrayUtilities) {
  'use strict';

  function addSingleDecodeCode(decodeDefinition) {
    var encodedValue;

      encodedValue = decodeDefinition.prefix + decodeDefinition.code + ';';

      decodeDefinition.encodingObject.encodings.push(encodedValue);
      decodeDefinition.encodingObject.decodeMap[encodedValue] = String.fromCharCode(decodeDefinition.decimalCode);
  }

  function addDecodeCode(decodeDefinition) {
    if(Array.isArray(decodeDefinition.code)) {
      functionArrayUtilities.callForAllInDefinedArray({
        arrayItemName: 'code',
        argumentObject: decodeDefinition,
        delegateFunction: addSingleDecodeCode
      });
    } else {
      addSingleDecodeCode(decodeDefinition);
    }
  }

  return {
    addDecodeCode: addDecodeCode,
    addSingleDecodeCode: addSingleDecodeCode
  };

});
