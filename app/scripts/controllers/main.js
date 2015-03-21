'use strict';

/**
 * @ngdoc function
 * @name todoChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoChallengeApp
 */
angular.module('todoChallengeApp').controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'item 4'];
  });
