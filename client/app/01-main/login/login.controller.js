'use strict';

angular.module('bifrostApp')
.controller('LoginCtrl', function(Doctor, $rootScope, $state, Hospital) {  //Clinic
    
    this.login = function() {

        // if currentUser is not defined
        if (!$rootScope.currentUser) {

            this.loginResult = Doctor.login( { include: 'user', rememberMe: false }, this.credentials, function(user) {

                console.log('user: ' + JSON.stringify(user) );
                
                // assign currentUser
                $rootScope.currentUser = user.user;

                // find by id doctor hospitals
                Doctor.hospitals({ id: $rootScope.currentUser.id }, function(hospitals) {

                    console.log('Hospitals: ' + JSON.stringify(hospitals) );

                    // assign currentHospital
                    $rootScope.currentHospital = hospitals[0];

                    Hospital.doctors({ id: hospitals[0].id }, function(doctors) {
                        console.log('doctors: ' + JSON.stringify(doctors) );

                        $rootScope.currentHospital.doctors = doctors;
                        $rootScope.hospitalDoctorIds = [];

                        for (var i = 0; i < $rootScope.currentHospital.doctors.length; i++) {
                            $rootScope.hospitalDoctorIds.push($rootScope.currentHospital.doctors[i].id);
                        }

                        $state.go('main');  //main.dashboard
                    });
                });
            });
        }
    }; // this.login
});
