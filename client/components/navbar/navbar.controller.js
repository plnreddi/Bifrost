'use strict';

angular.module('bifrostApp')
  .controller('NavbarCtrl', function($scope) {
    $scope.menu = [{
      'title': 'Appointments',
      'sref': 'main.appointment'
    }, {
      'title': 'Patients',
      'sref': 'main.patients'
    }, {
      'title': 'Settings',
      'sref': 'main.settings'
    }];

    $scope.isCollapsed = true;
  });
