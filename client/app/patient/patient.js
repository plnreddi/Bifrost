'use strict';

angular.module('bifrostApp').config(function($stateProvider) {

    $stateProvider
        .state('main.patient', {
            url: 'patient',
            templateUrl: 'app/patient/views/main.html',
            controller: 'PatientMainCtrl',
            data: {
                requireLogin: true
            }
        })
        .state('main.patient.index', {
            url: '',
            controller: function ($state) {
                $state.go('main.patient.data');
            }
        })
        .state('main.patient.data', {
            url: '',
            templateUrl: 'app/patient/views/data.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
            resolve: {
                data: function(PatientData) {
                    return PatientData.find();
                }
            }
        })
        .state('main.patient.byid', {
            url: '/:id',
            templateUrl: 'app/patient/views/databyid.html',
            controller: 'PatientByIdCtrl as PatientByIdCtrl',
            resolve: {
                dataById: function($stateParams, PatientData) {
                    console.log($stateParams.id);
                    return PatientData.findById($stateParams.id);
                }
            }
        });
});
