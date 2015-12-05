'use strict';

angular.module('bifrostApp')
  .controller('NavbarCtrl', function($scope, $location, $state) {
    $scope.menu = [{
      'title': 'Home',
      'sref': 'main'
    }, {
      'title': 'Patients',
      'sref': 'patients'
    }];

    $scope.isCollapsed = true;
  });
