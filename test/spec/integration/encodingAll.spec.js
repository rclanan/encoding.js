define([
  'htmlCorrectlyEncodedMatcher',
  'htmlCorrectlyDecodedMatcher',
  'encoding',
  'definitions/html/htmlDefinitions'
  ],
  function(correctlyEncodedMatcher, correctlyDecodedMatcher, encoding, htmlDefinitions) {
    'use strict';

    describe("Encoding All htmlDefinitions Integration Tests", function(){

      beforeEach(function() {
        jasmine.addMatchers({
          toCorrectlyEncodeTo: correctlyEncodedMatcher.buildMatcher(encoding),
          toCorrectlyDecodeTo: correctlyDecodedMatcher.buildMatcher(encoding)
        });
      });


      htmlDefinitions.forEach(function(characterDefinition){
        var character = String.fromCharCode(characterDefinition.decimalCode);

        it("should correctly encode '" + character + "'", function() {
          expect(character).toCorrectlyEncodeTo({
            name: characterDefinition.names[0]
          });
        });

        it("should correctly decode '" + character + "'", function() {
          expect(characterDefinition).toCorrectlyDecodeTo(character);
        });
      });

  });
});
