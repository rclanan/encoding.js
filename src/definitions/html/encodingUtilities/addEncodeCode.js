define([], function() {
  'use strict';

  function addEncodeCode(encodeDefinition){
    var char =  String.fromCharCode(encodeDefinition.decimalCode);

    encodeDefinition.encodingObject.characters.push(char);
    encodeDefinition.encodingObject.encodeMap[char] = '&' + encodeDefinition.name + ';';
  }

  return {
    addEncodeCode: addEncodeCode
  };
});
