'use strict';

var htmlCodeMapBuilder, htmlDefinitions, encodeRegEx, decodeRegEx, encode, decode, htmlCodeMap, regexUtilites;

htmlCodeMapBuilder = require('./definitions/html/htmlCodeMap');
htmlDefinitions = require('./definitions/html/htmlDefinitions');
regexUtilites = require('./definitions/html/regexUtilites');

htmlCodeMap = htmlCodeMapBuilder.buildCodeMap(htmlDefinitions);

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
encodeRegEx = regexUtilites.generateRegEx(htmlCodeMap.characters);

// generate a regex that matches the characters we want to decode.
decodeRegEx = regexUtilites.generateRegEx(htmlCodeMap.encodings);

return {
  encode: encode,
  decode: decode
};
