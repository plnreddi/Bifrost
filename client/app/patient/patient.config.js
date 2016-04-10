'use strict';

angular.module('bifrostApp')
.run(function($rootScope, gettextCatalog) {

  // Add Menu Patient
  $rootScope.addMenu(gettextCatalog.getString('Patient'), 'main.patient',
    'fa-user', 'main.patient');
  });
