(function () { 'use strict';
  angular
    .module('bifrostApp')
    /**
     * @ngdoc directive
     * @name bifrostApp.directive:adminHeader
     * @description
     * @param {string} title Title
     * @param {string} subTitle Subtitle
     * # adminHeader
     */
    .config(function ($stateProvider) {
      
        $stateProvider
        
            .state('main.doctor', {
                abstract: true,
                url: 'doctor',
                templateUrl: 'app/doctor/views/doctor-main.html',
                controller: 'DoctorMainCtrl as DoctorMainCtrl',
            })
            
            .state('main.doctor.index', {
                url: '',
                controller: function ($state) {
                    $state.go('main.doctor.new');
                }
            })
            
            .state('main.doctor.new', {
                url: '/new',       
                views: {
                    '': { templateUrl: 'app/doctor/views/doctor-new.html', 
                          controller: 'DoctorDataCtrl as DoctorDataCtrl'
                    },
                    
                    'columnOne@main.doctor.new': {
                        templateUrl: 'app/doctor/views/doctor-new-col1.html'
                    },
                    'columnTwo@main.doctor.new': {
                        templateUrl: 'app/doctor/views/doctor-new-col2.html'
                    }
                }
            })
            
            .state('main.doctor.old', {
                url: '/old',       
                views: {
                    '': { templateUrl: 'app/doctor/views/doctor-old.html', 
                          controller: 'DoctorDataCtrl as DoctorDataCtrl'
                    },
                    /*
                    'columnOne@main.doctor.new': {
                        templateUrl: 'app/doctor/views/doctor-new-col1.html'
                    },
                    'columnTwo@main.doctor.new': {
                        templateUrl: 'app/doctor/views/doctor-new-col2.html'
                    }
                    */
                }
            })
            
            
                   
    });

})();




  