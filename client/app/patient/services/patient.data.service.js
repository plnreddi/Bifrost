
(function() { 'use strict';

    angular
        .module('bifrostApp')
        /**
         * @ngdoc service
         * @name bifrostApp.Patient
         * @description
         * # Patient
         * Factory in the bifrostApp.
         */
        .service('patientData', function($rootScope, Patient, Doctor, Practice) {
            
            $rootScope.tmpLogin();
            
            this.getPatients = function(cb) {
                
                Doctor.hospitals({ id: 1 }, function(hospitals) {
                    console.log('Hospitals: ' + JSON.stringify(hospitals) );
                    
                    Practice.find( { filter: { where: { doctorId: 1, hospitalId: hospitals[0].id } } }, function(practices) {
                        console.log('Practices: ' + JSON.stringify(practices) );
                    
                        Practice.patients( { id: practices[0].id }, function(patients) {
                            console.log('Patients: ' + JSON.stringify(patients[0]) );
                            cb(patients); 
                        })
                    })
                })
            
            };  
                                  
   });

})();



