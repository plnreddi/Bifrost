

'use strict';

angular.module('bifrostApp').config(function($stateProvider) {

    $stateProvider
    
        .state('main.patient', {
            abstract: true,
            url: 'patient',
            templateUrl: 'app/patient/views/patient-main.html',
            controller: 'PatientMainCtrl as PatientMainCtrl',
            data: {
                requireLogin: false
            }
        })
        
        .state('main.patient.index', {
            url: '',
            controller: function ($state) {
                $state.go('main.patient.data');
            }
        })

        .state('main.patient.new', {
            url: '/new',       
            views: {
                '': { templateUrl: 'app/patient/views/patient-new.html',
                      controller: 'PatientDataCtrl as PatientDataCtrl'
                    },
                    
                'columnOne@main.patient.new': {
                    templateUrl: 'app/patient/views/patient-new-demo.html',
                },
                'columnTwo@main.patient.new': {
                    templateUrl: 'app/patient/views/patient-new-medi.html',
                }
            }
           
        })
        
        .state('main.patient.newdemo', {
            url: '/newdemo',
            templateUrl: 'app/patient/views/patient-new-demo.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
        })
        
        .state('main.patient.newmedi', {
            url: '/newmedi',
            templateUrl: 'app/patient/views/patient-new-medi.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
        })
        
        .state('main.patient.old', {
            url: '/old',
            templateUrl: 'app/patient/views/patient-old.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
        })
        
        .state('main.patient.olddemo', {
            url: '/olddemo',
            templateUrl: 'app/patient/views/patient-old-demo.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
        })
        
        .state('main.patient.oldmedi', {
            url: '/oldmedi',
            templateUrl: 'app/patient/views/patient-old-medi.html',
            controller: 'PatientDataCtrl as PatientDataCtrl',
        })
        
        .state('main.patient.test', {
            url: '/test',
            templateUrl: 'app/patient/views/test.html',
            controller: 'TestCtrl as TestCtrl',
            data: {
                requireLogin: false
            }
        });
        
});
