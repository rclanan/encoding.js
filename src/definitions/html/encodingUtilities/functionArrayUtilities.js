'use strict';

var arrayCallUtilities = require('./definitions/html/encodingUtilities/arrayCallUtilities');

function callForAllInDefinedArray(functionDefinition) {

  functionDefinition.argumentObject[functionDefinition.arrayItemName].forEach(function(singleItem) {
    arrayCallUtilities.callFunctionWithArrayItem({
      argumentObject: functionDefinition.argumentObject,
      arrayItemName: functionDefinition.arrayItemName,
      singleItem: singleItem,
      delegateFunction: functionDefinition.delegateFunction
    });

  });
}

module.exports = {
  callForAllInDefinedArray: callForAllInDefinedArray
};
