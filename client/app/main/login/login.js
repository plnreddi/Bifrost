'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginCtrl as LoginCtrl',
        data: {
          requireLogin: false
        }
      });
  });
