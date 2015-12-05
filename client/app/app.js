'use strict';

angular.module('bifrostApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'mgcrea.ngStrap',
  'ui.calendar',
  'lbServices'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    //$locationProvider.html5Mode(true);
  }).run(function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('login');

      }
    });

  });;
