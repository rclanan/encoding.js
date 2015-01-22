define('mixedTextGenerator', [], function() {
  'use strict';

  function mixInText (text) {
    var prefix, postfix;
    prefix = 'asntehusnathoeurcahoeu';
    postfix = ' satehurcaboeurdaoeru';

    return prefix + text + postfix;
  }

  function generateMixedTextArray(textArray) {
    return textArray.map(mixInText);
  }

  function generateMixedTextObject(textFilledObject) {
    var textItem, newTextFilledObject;
    newTextFilledObject = {};
    for(textItem in textFilledObject) {
      if(textFilledObject.hasOwnProperty(textItem)) {
        newTextFilledObject[textItem] = mixInText(textFilledObject[textItem]);
      }
    }
    return newTextFilledObject;
  }

  function generateMixedText(givenObject) {
    if(Array.isArray(givenObject)) {
      return generateMixedTextArray(givenObject);
    }

    if(typeof givenObject === 'object') {
      return generateMixedTextObject(givenObject);
    }

    return mixInText(givenObject);
  }

  return {
      generateMixedText: generateMixedText
  };
});
