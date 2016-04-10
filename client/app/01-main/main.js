'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'app/01-main/main.html',
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
        templateUrl: 'app/01-main/dashboard.html'
      });
  });
