'use strict';

/**
 * @ngdoc function
 * @name budgeteerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgeteerApp
 */
angular.module('budgeteerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
