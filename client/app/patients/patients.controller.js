'use strict';

angular.module('bifrostApp')
  .controller('PatientsCtrl', function(Doctor, $rootScope) {
    Doctor.patients({
      id: $rootScope.currentUser.id
    }, angular.bind(this, function(patients) {
      this.patients = patients;

    }));
  });
