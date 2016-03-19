'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('appointment', {
        url: '/',
        templateUrl: 'app/appointment/appointment.html',
        controller: 'AppointmentCtrl as AppointmentCtrl',
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
