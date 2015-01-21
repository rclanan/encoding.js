define([
  'htmlCorrectlyEncodedMatcher',
  'htmlCorrectlyDecodedMatcher',
  'encoding',
  'xssCharacterDefinitions'
  ],
  function(correctlyEncodedMatcher, correctlyDecodedMatcher, encoding, xssDefinitions) {
    'use strict';

    function getMixedText(textToMixIn) {
      return 'sntaoheu' + textToMixIn + ' aoesuhh';
    }

    describe("Encoding XSS Specific Character Tests", function(){

      beforeEach(function() {
        jasmine.addMatchers({
          toCorrectlyEncodeTo: correctlyEncodedMatcher.buildMatcher(encoding),
          toCorrectlyDecodeTo: correctlyDecodedMatcher.buildMatcher(encoding)
        });
      });


      xssDefinitions.forEach(function(chararcterDefinition){
        var character = String.fromCharCode(chararcterDefinition.decimalCode);
        var encodedChar = '&' + chararcterDefinition.names[0] + ';';

        it("should correctly encode '" + character + "'", function() {
          expect(character).toCorrectlyEncodeTo(encodedChar);
        });

        it("should correctly decode '" + character + "'", function() {
          expect(chararcterDefinition).toCorrectlyDecodeTo(character);
        });

        it("should correctly encode character buried in text", function(){

        });
      });

    });
  });
