'use strict';

/**
 * @ngdoc function
 * @name budgeteerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the budgeteerApp
 */
angular.module('budgeteerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
