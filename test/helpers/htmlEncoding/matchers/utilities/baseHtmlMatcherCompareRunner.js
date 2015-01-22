define('baseHtmlMatcherCompareRunner', [
'baseHtmlMatch'],
function(baseHtmlMatch) {
  'use strict';

  function buildCompareDefinition(compareDefinition){
    return {
      compareFunction: compareDefinition.compareFunction,
      matcher: baseHtmlMatch.buildMatcher(compareDefinition.compareText)
    };
  }

  function buildCompareDefinitions(givenDefinitions) {
    return givenDefinitions.map(buildCompareDefinition);
  }

  function buildCompareCalls(compareCallsDefinition) {
    var compareCalls = [];
    compareCallsDefinition.compareLibraries.forEach(function(library){
      compareCallsDefinition.compareDefinitions.forEach(function (compareDefinition){
        compareCalls.push(library[compareDefinition.compareFunction](compareDefinition.matcher));
      });
    });

    return  compareCalls;
  }

  // builds a generic function that takes an argument and calls every item in the compareCals
  // with 'given'. It will return either the first result that has 'result.pass' evaluate to falsey,
  // or the last result returned at the end of the compareCalls array.
  function buildRunAllComparesFunction(compareCalls) {
    return function(given) {
      var result, index;

      for(index = 0; index < compareCalls.length; index += 1) {
        result = compareCalls[index](given);

        if(!result.pass) {
          return result;
        }
      }
      return result;
    };
  }

  // this builds the compare libraries and compare calls. Each library needs to have
  // the listed compare function down below. for each library and compare function, a matcher
  // will be generated with the given text. It will then create an array that contains each function call
  // to match against.
  // The coffee notation on this is higher then I'd like it to be (Coffee Notation: how much caffine you need to understand)
  // but, this saves on a ton of code and makes extending this particular matcher much easier.
  // NOTE: this test is slow as hell in context of this project. Meant as an integration test matcher, not a unit test matcher.
  function buildComparer(definition) {
    var compareDefinitions, compareCalls;

    compareDefinitions = buildCompareDefinitions(definition.compareDefinitions);

    compareCalls = buildCompareCalls({
      compareLibraries: definition.compareLibraries,
      compareDefinitions: compareDefinitions
    });


    return buildRunAllComparesFunction(compareCalls);
  }

  return {
    buildMatchComparer: buildComparer
  };
});
