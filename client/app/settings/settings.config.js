'use strict';

angular.module('bifrostApp')
.run(function($rootScope, gettextCatalog) {

  // Add Menu Settings
  $rootScope.addMenu(gettextCatalog.getString('Settings'), 'main.settings',
    'fa-gear', 'main.settings');
  });
