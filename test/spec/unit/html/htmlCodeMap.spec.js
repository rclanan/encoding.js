define([
    'htmlDefinitionsMock',
    'squirePath/Squire'
  ],
  function(htmlDefinitionsMock, Squire) {
    'use strict';

    var injector = new Squire();

    function compareArrays(array1, array2) {
      var is_same = (array1.length === array2.length) && array1.every(function(element, index) {
        return element === array2[index];
      });
      return is_same;
    }

    describe("htmlCodeMap Unit Tests", function(){
      var testDependencies, testResults;

      testDependencies = {};
      testResults = {
        itemsAdded: [],
      };

      beforeAll(function(done) {
        injector.mock('definitions/html/encodingUtilities/encodeBuilderFactory', {
          buildEncodeBuilder: function(givenPrefixes) {
            testResults.givenPrefixes = givenPrefixes;
            return {
              addItem: function(item){
                testResults.itemsAdded.push(item);
              },
              codes: 'passed.'
            };
          }
        });


        injector.require(['definitions/html/htmlCodeMap'], function(htmlCodeMapBuilder){
          testDependencies.htmlCodeMapBuilder = htmlCodeMapBuilder;
          testResults.htmlCodeMap = testDependencies.htmlCodeMapBuilder.buildCodeMap(htmlDefinitionsMock);
          done();
        });
      });

      it('should pass in the prefixes for named, decimal, and hexadecimal encodings', function() {
        expect(testResults.givenPrefixes.decimalCode).toBe('&#');
        expect(testResults.givenPrefixes.hexadecimalCode).toBe('&#');
        expect(testResults.givenPrefixes.names).toBe('&');
      });

      it('should call encodeBuilder.addItem for each item passed in htmlDefinitions', function() {
        var itemsCalled, expectedResults;

        expectedResults = [];

        itemsCalled = htmlDefinitionsMock.map(function (definition){
          var i, timesCorrectlyAdded, itemsAdded;
          expectedResults.push(1);

          itemsAdded = testResults.itemsAdded;
          timesCorrectlyAdded = 0;

          for(i = 0; i < itemsAdded.length; i += 1) {
            if(itemsAdded[i].decimalCode === definition.decimalCode &&
                itemsAdded[i].name === definition.names[0] &&
                compareArrays(itemsAdded[i].names, definition.names) &&
                itemsAdded[i].hexadecimalCode === definition.hexadecimalCode
            ) {
              timesCorrectlyAdded += 1;
            }
          }
          return timesCorrectlyAdded;
        });


        expect(itemsCalled).toEqual(expectedResults);
      });

      it('should return the code object in encodeBuilderFactory', function(){
        expect(testResults.htmlCodeMap).toBe('passed.');
      });
    });
  });
