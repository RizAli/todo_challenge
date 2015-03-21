'use strict';

/**
 * @ngdoc function
 * @name todoChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoChallengeApp
 */


angular.module('todoChallengeApp').controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
