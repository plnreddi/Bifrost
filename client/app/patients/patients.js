'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.patients', {
        url: 'patients',
        templateUrl: 'app/patients/patients.html',
        controller: 'PatientsCtrl as PatientsCtrl',
        data: {
          requireLogin: true
        }
      }).state('main.patientDetail', {
        url: 'patients/:id',
        templateUrl: 'app/patients/patient.detail.html',
        controller: 'PatientDetailCtrl as PatientDetailCtrl',
        data: {
          requireLogin: true
        }
      });
  });
