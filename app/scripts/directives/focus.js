'use strict';

angular.module('app')
  .directive('tdFocus', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element[0].focus();
      }
    };
  });