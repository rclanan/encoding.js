'use strict';

//TODO: Investigate if this could be useful in a helper library, looks generic enough
var createRegExString, generateRegEx, escapeSpecialCharacters, specialCharacterRegex;

specialCharacterRegex = /[\\\^\$\.\|\?\*\+\(\)\[\]\{\}]/g;

escapeSpecialCharacters = function(stringArray) {
  stringArray.forEach(function(character, index) {
    if(character.match(specialCharacterRegex)) {
      stringArray[index] = '\\' + character;
    }
  });

  return stringArray;
};

createRegExString = function(stringArray) {
  var regExString, onlySingleCharacters, rawStringJoin;
  onlySingleCharacters = stringArray.every(function(item) {
    return item.length === 1;
  });

  stringArray = escapeSpecialCharacters(stringArray);

  if (onlySingleCharacters) {
    rawStringJoin = stringArray.join('');

    regExString = '[' + stringArray.join('') + ']';

  } else {
    regExString = '(' + stringArray.join('|') + ')';
  }
  return regExString;
};

generateRegEx = function(stringArray) {
  var regExString = createRegExString(stringArray);
  return new RegExp(regExString, 'g');
};

module.exports = {
  escapeSpecialCharacters: escapeSpecialCharacters,
  createRegExString: createRegExString,
  generateRegEx: generateRegEx
};
