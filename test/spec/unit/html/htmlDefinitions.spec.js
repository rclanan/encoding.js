define([
  'definitions/html/htmlDefinitions'
  ],
  function(htmlDefinitions) {
    'use strict';

    function checkObjectsHaveProperty(property) {
      htmlDefinitions.forEach(function(definition){
        if(!definition.hasOwnProperty(property)) {
          return false;
        }
      });

      return true;
    }

    describe('htmlDefinitions Unit Tests', function(){

      it('should return an array', function() {
        var isArrayType;

        isArrayType = Array.isArray(htmlDefinitions);

        expect(isArrayType).toBeTruthy();
      });

      it('should have three properties on the definitions in the array', function() {
        var hasThreeProperties = true;

        htmlDefinitions.forEach(function(definition){
          if(Object.keys(definition).length !== 3) {
            hasThreeProperties = false;

            return;
          }
        });

        expect(hasThreeProperties).toBeTruthy();
      });

      it('should have a property called names', function() {
        var hasProperty = checkObjectsHaveProperty('names');

        expect(hasProperty).toBeTruthy();
      });

      it('should have names property be an array', function() {
        var isArrayType = true;

        htmlDefinitions.forEach(function(definition){
          if(!definition.hasOwnProperty('names') && !Array.isArray(definition.names)) {
            isArrayType = false;

            return;
          }
        });

        expect(isArrayType).toBeTruthy();
      });

      it('should have names property array only contain strings', function() {
        var containsStrings = true;

        htmlDefinitions.forEach(function(definition){
          var names = definition.names;

          if(definition.hasOwnProperty('names') && Array.isArray(names)) {

            names.forEach(function(name) {
              if(typeof name !== 'string') {
                containsStrings = false;

                return;
              }
            });
          }
        });

        expect(containsStrings).toBeTruthy();
      });

      it('should have a property called decimalCode', function() {
        var hasProperty = checkObjectsHaveProperty('decimalCode');

        expect(hasProperty).toBeTruthy();

      });

      it('should have decimalCode property be an number', function() {
        var isNumberType = true;

        htmlDefinitions.forEach(function(definition){
          if(!definition.hasOwnProperty('decimalCode') && (typeof definition.decimalCode !== 'number')) {
            isNumberType = false;

            return;
          }
        });

        expect(isNumberType).toBeTruthy();
      });

      it('should have a property called hexadecimalCode', function() {
        var hasProperty = checkObjectsHaveProperty('hexadecimalCode');

        expect(hasProperty).toBeTruthy();
      });

      it('should have hexadecimalCode property be an string', function() {
        var isStringType = true;

        htmlDefinitions.forEach(function(definition){
          if(!definition.hasOwnProperty('hexadecimalCode') && (typeof definition.hexadecimalCode !== 'string')) {
            isStringType = false;

            return;
          }
        });

        expect(isStringType).toBeTruthy();
      });

      it('should have hexadecimalCode property be able to parse to an int', function() {
        var isInteger = true;

        htmlDefinitions.forEach(function(definition){
          if(definition.hasOwnProperty('hexadecimalCode') && (typeof definition.hexadecimalCode === 'string')) {
            if(!isNaN(parseInt(definition.hexadecimalCode, 16))) {
              isInteger = false;

              return;
            }
          }
        });

        expect(isInteger).toBeTruthy();
      });
    });
  });
