'use strict';

angular.module('bifrostApp')
.run(function($rootScope, gettextCatalog) {

  // Add Menu Patient
  $rootScope.addMenu(gettextCatalog.getString('Patient'), 'main.patient.newdemo',
    'fa-user', 'main.patient.newdemo');
  });
