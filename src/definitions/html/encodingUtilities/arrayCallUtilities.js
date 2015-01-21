define([], function(){
  'use strict';

  function buildNewArgumentObject(objectDefiniton) {
    var item, newArgumentObject;
    newArgumentObject = {};

    for(item in objectDefiniton.argumentObject) {
      if(objectDefiniton.argumentObject.hasOwnProperty(item)) {
        newArgumentObject[item] = (item === objectDefiniton.arrayItemName) ? objectDefiniton.singleItem : objectDefiniton.argumentObject[item];
      }
    }

    return newArgumentObject;
  }

  function callFunctionWithArrayItem(callDefinition) {

    var newArgumentObject = buildNewArgumentObject({
      argumentObject: callDefinition.argumentObject,
      arrayItemName: callDefinition.arrayItemName,
      singleItem: callDefinition.singleItem
    });

    callDefinition.delegateFunction(newArgumentObject);
  }

  return {
    buildNewArgumentObject: buildNewArgumentObject,
    callFunctionWithArrayItem: callFunctionWithArrayItem
  };
});
