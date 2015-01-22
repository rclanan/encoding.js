define('htmlDefinitionsMock',[], function() {
  'use strict';

  var xssSpecificCharacters;
  xssSpecificCharacters = [{
    character: '<',
    names: ['lt', 'LT'],
    hexadecimalCode: 'x0003C',
    decimalCode: 60
  },
  {
    character: '>',
    names : ['gt', 'GT'],
    decimalCode : 62,
    hexadecimalCode : 'x0003E'
  },
  {
    character: '/',
    names : ['sol'],
    decimalCode : 47,
    hexadecimalCode : 'x0002F'
  },
  {
    character: '&',
    names : ['amp', 'AMP'],
    decimalCode : 38,
    hexadecimalCode : 'x00026'
  },
  {
    character: "'",
    names : ['apos'],
    decimalCode : 39,
    hexadecimalCode : 'x00027'
  } ,
  {
    character: '"',
    names : ['quot', 'QUOT'],
    decimalCode : 34,
    hexadecimalCode : 'x00022'
  }];

  return xssSpecificCharacters;
});
