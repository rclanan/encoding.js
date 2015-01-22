define(['definitions/html/htmlCodeMap', 'definitions/html/htmlDefinitions'], function(htmlCodeMapBuilder, htmlDefinitions) {
  'use strict';

  var encodeRegEx, decodeRegEx, createRegExString, generateRegEx, encode, decode, escapeSpecialCharacters, specialCharacterRegex, htmlCodeMap;

  htmlCodeMap = htmlCodeMapBuilder.buildCodeMap(htmlDefinitions);

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

  encode = function(string) {
    return String(string).replace(encodeRegEx, function(s) {
      return htmlCodeMap.encodeMap[s];
    });
  };

  decode = function(string) {
    return String(string).replace(decodeRegEx, function(s) {
      return htmlCodeMap.decodeMap[s];
    });
  };

  // generate a regex that matches on the characters we want to encode
  encodeRegEx = generateRegEx(htmlCodeMap.characters);

  // generate a regex that matches the characters we want to decode.
  decodeRegEx = generateRegEx(htmlCodeMap.encodings);

  return {
    encode: encode,
    decode: decode
  };
});
