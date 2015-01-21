define('htmlCorrectlyEncodedMatcher', [ 'baseHtmlMatch'], function(baseHtmlMatch) {
  'use strict';

  var compareEncode = baseHtmlMatch.buildMatcher('encoding');

  return {
    buildMatcher: function(encoding) {

      return function() {
        return {
          compare: function(actual, expectedDefinition) {
            var encoded, result;

            encoded = encoding.html.encode(actual);

            result = compareEncode({
              actual: actual,
              expectedDefinition: expectedDefinition,
              translated: encoded
            });

            return result;
          }
        };
      };
    }
  };
});
