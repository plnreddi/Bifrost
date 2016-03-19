'use strict';

angular.module('bifrostApp')
  .controller('LoginCtrl', function(Doctor, $rootScope, $state, Clinic) {
    this.login = function() {
      if (!$rootScope.currentUser) {
        this.loginResult = Doctor.login({
            include: 'user',
            rememberMe: false
          }, this.credentials,
          function(user) {
            $rootScope.currentUser = user.user;
            Doctor.clinics({
              id: $rootScope.currentUser.id
            }, function(clinic) {
              $rootScope.currentClinic = clinic;
              Clinic.doctors({
                id: clinic.id
              }, function(doctors) {
                $rootScope.currentClinic.doctors = doctors;
                $rootScope.clinicDoctorIds = [];
                for (var i = 0; i < $rootScope.currentClinic.doctors.length; i++) {
                  $rootScope.clinicDoctorIds.push($rootScope.currentClinic.doctors[i].id);
                }
                $state.go('appointment');
              });
            });
          });
      }
    };
  });
