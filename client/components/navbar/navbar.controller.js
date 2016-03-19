'use strict';

angular.module('bifrostApp')
  .controller('NavbarCtrl', function($scope) {
    $scope.menu = [{
      'title': 'Appointments',
      'sref': 'appointment'
    }, {
      'title': 'Patients',
      'sref': 'patients'
    }, {
      'title': 'Settings',
      'sref': 'settings'
    }];

    $scope.isCollapsed = true;
  });
