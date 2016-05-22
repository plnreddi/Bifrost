
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
        .service('doctorData', function($rootScope, Patient, Doctor, Practice) {
            
            $rootScope.tmpLogin();
            
            this.find = function() {
                return Doctor.find().$promise;
            };
            
            this.findById = function (id) {
                return Doctor.findById({ id: id }).$promise;
            };
                
            this.getHospitals = function(id) {
                return Doctor.hospitals({ id: id }).$promise;
            };  
            
            
            this.doctorsAndHospitals = function(id) {
                return Doctor.doctorsAndHospitals({ id: id }).$promise;
            };  
            
            this.upsert = function (data) {
                return Doctor.upsert(data).$promise
                    .then(function () {
                        console.log('success');
                    })
                    .catch(function (err) {
                        console.log('error');
                    });
            };
                             
   });

})();

           
           
           
           
           
           
          