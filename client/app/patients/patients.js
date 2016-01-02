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
      }).state('patients.detail', {
        url: '/patients/:id',
        views: {
          'detail': {
            templateUrl: 'app/patients/patient.detail.html',
            controller: 'PatientDetailCtrl as PatientDetailCtrl'
          }
        },
      });
  });
