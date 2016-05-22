
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
        $rootScope.addMenu(gettextCatalog.getString('Doctor'), 'main.doctor.index', 'fa-user', 'main.doctor.index');
    
    });
    
})();




