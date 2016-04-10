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
  'gettext',
  'ui.gravatar'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, formlyConfigProvider) {
    $urlRouterProvider.otherwise('/');
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

  });
