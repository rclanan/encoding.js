'use strict';

var addEncodeCode, addDecodeCode;

addEncodeCode = require('./definitions/html/encodingUtilities/addEncodeCode');
addDecodeCode = require('./definitions/html/encodingUtilities/addDecodeCode');

module.exports = {
  addDecodeCode: addDecodeCode.addDecodeCode,
  addEncodeCode: addEncodeCode.addEncodeCode
};
