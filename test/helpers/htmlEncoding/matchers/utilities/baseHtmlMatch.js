define('baseHtmlMatch',[], function(){
  'use strict';

  function buildMatcher(compareTerm) {
    var expectedCompareOf = 'Expected ' + compareTerm + ' of ';

    return function(given) {
      var result = {};

      result.message = function() {
        if(given.translated !== given.expectedDefinition) {
          return expectedCompareOf + given.actual + " to be " + given.expectedDefinition;
        }

        if(given.translated === given.actual) {
          return expectedCompareOf + given.actual + " to be " + given.expectedDefinition + " but instead it was " + given.actual;
        }
      };

      result.pass = (given.translated === given.expectedDefinition);
      return result;
    };
  }

  return {
    buildMatcher: buildMatcher
  };
});
