define('htmlEncodingHelper', [], function() {
  'use strict';

  function mixInsideText(symbol) {
    var mixxedInTextPrepend, mixxedInTextPostfix;
    mixxedInTextPrepend = 'aoeutheut';
    mixxedInTextPostfix = 'tuhechuh';

    return mixxedInTextPrepend + symbol + mixxedInTextPostfix;
  }

  function assertDecodeBase(encoding, symbol, encodedSymbol) {
    var decodedSymbol, decodedMixedText;
    decodedSymbol = encoding.html.decode(encodedSymbol);
    decodedMixedText = encoding.html.decode(mixInsideText(encodedSymbol));

    expect(decodedSymbol).toEqual(symbol);
    expect(decodedMixedText).toEqual(mixInsideText(symbol));
  }

  function assertNamesDecodedCorrectly(decodedByNamesDefinition) {
    decodedByNamesDefinition.names.forEach(function(name){
      var encodedSymbol = '&' + name + ';';
      assertDecodeBase(decodedByNamesDefinition.encoding, decodedByNamesDefinition.symbol, encodedSymbol);
    });
  }

  function assertHexDecodedCorrectly(decodedByHexDefinition) {
    var hexCode = '&#' + decodedByHexDefinition.hexadecimalCode + ';';
    assertDecodeBase(decodedByHexDefinition.encoding, decodedByHexDefinition.symbol, hexCode);
  }

  function assertDecimalDecodedCorrectly(decodedByDecimalDefinition) {
    var decimalCode = '&#' + decodedByDecimalDefinition.decimalCode + ';';
    assertDecodeBase(decodedByDecimalDefinition.encoding, decodedByDecimalDefinition.symbol, decimalCode);
  }

  function assertEncodedCorrectly(encoding, symbol, expectedEncodedSymbol) {
    var encoded, encodedMixxed, expectedMixxed;

    expectedMixxed = mixInsideText(expectedEncodedSymbol);

    encoded = encoding.html.encode(symbol);
    encodedMixxed = encoding.html.encode(mixInsideText(symbol));

    expect(encoded).not.toEqual(symbol);
    expect(encoded).toEqual(expectedEncodedSymbol);
    expect(encodedMixxed).toEqual(expectedMixxed);
  }

  function assertDecodedCorrectly(encoding, symbol, codeDefinition){
    assertNamesDecodedCorrectly({
      encoding: encoding,
      symbol: symbol,
      names: codeDefinition.names
    });

    assertHexDecodedCorrectly({
      encoding: encoding,
      symbol: symbol,
      hexadecimalCode: codeDefinition.hexadecimalCode
    });

    assertDecimalDecodedCorrectly({
      encoding: encoding,
      symbol: symbol,
      decimalCode: codeDefinition.decimalCode
    });
  }

  return {
    assertDecodedCorrectly: assertDecodedCorrectly,
    assertEncodedCorrectly: assertEncodedCorrectly
  };
});
