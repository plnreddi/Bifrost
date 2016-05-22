
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
    .run(function ($rootScope, gettextCatalog) {
        
        // Add Menu Patient
        $rootScope.addMenu(gettextCatalog.getString('About'), 'main.about.index', 'fa-user', 'main.about.index');
    
    });
    
})();




