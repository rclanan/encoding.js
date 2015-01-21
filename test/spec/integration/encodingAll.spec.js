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


      htmlDefinitions.forEach(function(chararcterDefinition){
        var character = String.fromCharCode(chararcterDefinition.decimalCode);

        it("should correctly encode '" + character + "'", function() {
          expect(character).toCorrectlyEncodeTo('&' + chararcterDefinition.names[0] + ';');
        });

        it("should correctly decode '" + character + "'", function() {
          expect(chararcterDefinition).toCorrectlyDecodeTo(character);
        });
      });

  });
});
