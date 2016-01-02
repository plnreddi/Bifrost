'use strict';

angular.module('bifrostApp')
  .controller('NavbarCtrl', function($scope) {
    $scope.menu = [{
      'title': 'Home',
      'sref': 'main'
    }, {
      'title': 'Patients',
      'sref': 'patients'
    }, {
      'title': 'Settings',
      'sref': 'settings'
    }];

    $scope.isCollapsed = true;
  });
