define('htmlCorrectlyDecodedMatcher', [
'baseHtmlMatcherCompareRunner',
'decimalDecodeCompare',
'hexadecimalDecodeCompare',
'namesDecodeCompare'],
function(baseHtmlMatcherCompareRunner, decimalDecodeCompare, hexadecimalDecodeCompare, namesDecodeCompare) {
  'use strict';

  var runCompares;

  // this builds the compare libraries and compare calls. Each library needs to have
  // the listed compare function down below. for each library and compare function, a matcher
  // will be generated with the given text. It will then create an array that contains each function call
  // to match against.
  // The coffee notation on this is higher then I'd like it to be (Coffee Notation: how much caffine you need to understand)
  // but, this saves on a ton of code and makes extending this particular matcher much easier.
  // NOTE: this test is slow as hell in context of this project. Meant as an integration test matcher, not a unit test matcher.

  runCompares = baseHtmlMatcherCompareRunner.buildMatchComparer({
    compareLibraries: [decimalDecodeCompare, hexadecimalDecodeCompare, namesDecodeCompare],
    compareDefinitions:[
      { compareFunction: 'buildCompareFunction', compareText : 'decoding'},
      { compareFunction: 'buildCompareInMixedTextFunction', matcher : 'decoding mixed text'}
    ]
  });
  
  return {
    buildMatcher: function(encoding) {

      return function() {
        return {
          compare: function(actual, expectedCharacter) {
            var result;

            result = runCompares(
              {
                encoding: encoding,
                expectedCharacter: expectedCharacter,
                decimalCode: actual.decimalCode,
                hexadecimalCode: actual.hexadecimalCode,
                names: actual.names
              }
            );

            return result;
          }
        };
      };
    }
  };
});
