define('htmlEncodingMatchers',
[ 'correctlyEncodedMatcher',
  'correctlyDecodedMatcher'
], function (correctlyEncodedMatcher, correctlyDecodedMatcher){
  'use strict';

  function buildHtmlEncodingMatchers(encoding) {
    return {
      toBeCorrectlyEncoded: correctlyEncodedMatcher.buildCorrectlyEncodedMatcher(encoding),
      toBeCorrectlyDecoded: correctlyDecodedMatcher.buildCorrectlyDecodedMatcher(encoding)
    };
  }

  return {
    buildHtmlEncodingMatchers: buildHtmlEncodingMatchers
  };
});
