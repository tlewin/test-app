'use strict';

angular.module('app')
  .directive('stateButton', function() {
    return {
      restrict: 'EA',
      scope: {
        state: '=?'
      },
      transclude: true,
      templateUrl: 'views/state-button.html',
      link: function(scope, element, attrs) {
        scope.state = !!scope.state;
        element.on('click', function() {
          scope.$apply(function() {
            scope.state = !scope.state;
          });
        });
      }
    };
  });