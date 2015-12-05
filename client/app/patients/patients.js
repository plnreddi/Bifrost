'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('patients', {
        url: '/patients',
        templateUrl: 'app/patients/patients.html',
        controller: 'PatientsCtrl as PatientsCtrl',
        data: {
          requireLogin: true
        }
      });
  });
