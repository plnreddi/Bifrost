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
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, formlyConfigProvider) {
    $urlRouterProvider
      .otherwise('/');

    //$locationProvider.html5Mode(true);

    // adi check this
    formlyConfigProvider.setType({
        name: 'multi-checkbox',
        templateUrl: 'app/templates/multi-checkbox.tpl.html',
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



/*

app.run(function(formlyConfig) {
    var attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];

    var bindings = [ 'datepicker-mode', 'min-date', 'max-date' ];

    var ngModelAttrs = {};

    angular.forEach(attributes, function(attr) {
        ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    angular.forEach(bindings, function(binding) {
        ngModelAttrs[camelize(binding)] = {bound: binding};
    });

    console.log(ngModelAttrs);

    formlyConfig.setType({
        name: 'datepicker',
        templateUrl:  'datepicker.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datepickerOptions: {
                    format: 'MM.dd.yyyy',
                    initDate: new Date()
                }
            }
        },

        controller: ['$scope', function ($scope) {
            $scope.datepicker = {};

            $scope.datepicker.opened = false;

            $scope.datepicker.open = function ($event) {
                $scope.datepicker.opened = !$scope.datepicker.opened;
            };
        }]
    });

    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function(match, chr) {
            return chr ? chr.toLowerCase() : '';
        });
    }
});

*/