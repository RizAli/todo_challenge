'use strict';

/**
 * @ngdoc function
 * @name todoChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoChallengeApp
 */
angular.module('todoChallengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
