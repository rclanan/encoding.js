define(['definitions/html/encodingUtilities/arrayCallUtilities'], function(arrayCallUtilities){
  'use strict';

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

  return {
    callForAllInDefinedArray: callForAllInDefinedArray
  };

});
