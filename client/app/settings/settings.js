'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsCtrl as SettingsCtrl',
        data: {
          requireLogin: true
        },
        resolve: {
          'AppSettings': function(settings) {
            return settings.promise;
          }
        }
      });
  });
