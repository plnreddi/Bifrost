'use strict';

angular.module('bifrostApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'mgcrea.ngStrap',
  'ui.calendar',
  'lbServices',
  'formly',
  'formlyBootstrap',
  'ui.select',
  'ui.checkbox'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    //$locationProvider.html5Mode(true);
  }).run(function($rootScope, $state, formlyConfig) {

    formlyConfig.extras.removeChromeAutoComplete = true;
    formlyConfig.setType({
      name: 'async-ui-select',
      extends: 'select',
      templateUrl: 'app/templates/async-ui-select.tpl.html'
    });
    formlyConfig.setType({
      name: 'datepicker',
              extends: 'input',
      templateUrl: 'app/templates/datepicker.tpl.html'
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('login');

      }
    });

  });
