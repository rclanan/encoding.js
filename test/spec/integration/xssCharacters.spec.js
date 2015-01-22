define([
  'htmlCorrectlyEncodedMatcher',
  'htmlCorrectlyDecodedMatcher',
  'encoding',
  'xssCharacterDefinitions'
  ],
  function(correctlyEncodedMatcher, correctlyDecodedMatcher, encoding, xssDefinitions) {
    'use strict';

    describe("Encoding XSS Specific Character Tests", function(){

      beforeEach(function() {
        jasmine.addMatchers({
          toCorrectlyEncodeTo: correctlyEncodedMatcher.buildMatcher(encoding),
          toCorrectlyDecodeTo: correctlyDecodedMatcher.buildMatcher(encoding)
        });
      });


      xssDefinitions.forEach(function(characterDefinition){
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
