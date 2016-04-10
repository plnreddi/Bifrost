'use strict';

angular.module('bifrostApp')
.run(function($rootScope, gettextCatalog) {

  // Add Menu Appointment
  $rootScope.addMenu(gettextCatalog.getString('Appointment'), 'main.appointment',
    'fa-calendar-check-o', 'main.appointment');
  });
