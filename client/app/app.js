'use strict';

agGrid.initialiseAgGridWithAngular1(angular);
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
  'ui.checkbox',
  'agGrid',
  'gettext'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, formlyConfigProvider) {
    $urlRouterProvider
      .otherwise('/');

    //$locationProvider.html5Mode(true);

    // adi check this, multiple check box
    formlyConfigProvider.setType({
        name: 'multi-checkbox',
        templateUrl: 'app/templates/multi-checkbox.tpl.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    // adi check this, reduced height of input
    formlyConfigProvider.setType({
        name: 'inputsm',
        template: '<input class="form-control input-sm" ng-model="model[options.key]">',
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

  })


.run(function($rootScope, $state, formlyConfig) {

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

    // adi check this
    formlyConfig.setType({
        name: 'radioinline',
        extends: 'radio',
        templateUrl: 'app/templates/inline-radio.html'
    });



    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
            $state.go('login');
        }
    });



  });
