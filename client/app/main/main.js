'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as MainCtrl',
        data: {
          requireLogin: true
        }
      });
  });
