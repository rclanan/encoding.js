define(['definitions/html/encodingUtilities/htmlEncodeBuilderUtilities'],
  function(htmlEncodeBuilderUtilities){
    'use strict';

    function encodeBuilderFactory(namedPrefixes) {
      var encodingBuilder;
      encodingBuilder = {
        namedPrefixes: namedPrefixes,
        codes: {
          encodings: [],
          characters: [],
          decodeMap: {},
          encodeMap: {}
        },
        addItem: function (definition){
          var namedPrefix;

          for(namedPrefix in encodingBuilder.namedPrefixes) {
            htmlEncodeBuilderUtilities.addDecodeCode({
              prefix: encodingBuilder.namedPrefixes[namedPrefix],
              decimalCode: definition.decimalCode,
              code: definition[namedPrefix],
              encodingObject: encodingBuilder.codes
            });

            htmlEncodeBuilderUtilities.addEncodeCode({
              name: definition.name,
              decimalCode: definition.decimalCode,
              encodingObject: encodingBuilder.codes
            });

          }
        }
      };

      return encodingBuilder;
    }

    return {
      buildEncodeBuilder: encodeBuilderFactory
    };
});
