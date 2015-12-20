'use strict';

angular.module('bifrostApp')
  .controller('PatientDetailCtrl', function($stateParams, Patient) {
    Patient.findById({
      id: $stateParams.id
    }, angular.bind(this, function(patient) {
      this.patient = patient;
    }));
  });
