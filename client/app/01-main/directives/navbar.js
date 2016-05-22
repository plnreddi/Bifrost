(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bifrostApp.directive:navbar
   * @description
   * # navbar
   */
  angular
    .module('bifrostApp')
    .directive('navbar', function () {
      return {
        templateUrl: 'app/01-main/views/elements/navbar.html',
        restrict: 'E'
      };
    });

})();
