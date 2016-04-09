
/**
 * @ngdoc service
 * @name bifrostApp.Patient
 * @description
 * # Patient
 * Factory in the bifrostApp.
 */

(function() {

    'use strict';

    angular
        .module('bifrostApp')
        .service('PatientData', function(Patient, Doctor) {

            this.find = function() {
                return Patient.find().$promise;
            };

            this.findById = function (id) {
                return Patient.findById({ id: id }).$promise;
            };
    });

})();
