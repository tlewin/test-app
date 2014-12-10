'use strict';

angular.module('app')
  .directive('todoItem', function() {
    return {
      restrict: 'EA',
      scope: {
        todoTitle: '=?',
        todoDescription: '=?'
      },
      templateUrl: 'views/todo-item.html',
      link: function(scope, element, attrs) {
        scope.showDescription = false;
      }
    };
  });