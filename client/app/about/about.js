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
        
            .state('main.about', {
                abstract: true,
                url: 'about',
                templateUrl: 'app/about/views/about-main.html'
            })
            
            .state('main.about.index', {
                url: '',
                templateUrl: 'app/about/views/about.html',
                controller: 'AboutCtrl'
            });
    });

})();
