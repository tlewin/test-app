'use strict';

angular.module('app')
  .controller('ToDoCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.todoItem = {};

    $scope.todoItems = [];

    $scope.addToDoItem = function(form) {
      $scope.todoItems.push($scope.todoItem);
      $scope.todoItem = {};
      form.$setPristine();
      form.$setUntouched();
    };
  }]);