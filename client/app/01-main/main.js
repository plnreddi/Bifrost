

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
    .config(function($stateProvider) {
      
        $stateProvider
        
          .state('main', {
              abstract: true,
              url: '/',
              templateUrl: 'app/01-main/views/main.html',
              controller: 'MainCtrl as MainCtrl',
              data: {
                requireLogin: true
              },
              resolve: {
                'AppSettings': function(settings) {
                  return settings.promise;
                }
              }
          })
          
          .state('main.dashboard', {
              url: '',
              templateUrl: 'app/01-main/views/dashboard.html'
          });
        
    });
  
})();
