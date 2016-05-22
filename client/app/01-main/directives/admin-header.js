(function () { 'use strict';
  /**
   * @ngdoc directive
   * @name bifrostApp.directive:adminHeader
   * @description
   * @param {string} title Title
   * @param {string} subTitle Subtitle
   * # adminHeader
   */
  angular
    .module('bifrostApp')
    .directive('adminHeader', function () {
        return {
            templateUrl: 'app/01-main/views/elements/admin-header.html',
            transclude: true,
            scope: {
                title: '@',
                subTitle: '@'
            },
            restrict: 'A'
        };
    });

})();
