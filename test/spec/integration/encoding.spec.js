define([
  'encoding'
  ],
  function(encoding) {
  'use strict';

  describe("Encoding Integration Tests", function(){
    it('should return same encoding and decoding', function() {
      var text, expectedEncodedText, encodedText, decodedText;

      text = 'Hello World!';
      expectedEncodedText = 'Hello World&excl;';
      encodedText = encoding.html.encode(text);
      decodedText = encoding.html.decode(encodedText);

      expect(encodedText).toEqual(expectedEncodedText);
      expect(text).toEqual(decodedText);
    });
  });
});
