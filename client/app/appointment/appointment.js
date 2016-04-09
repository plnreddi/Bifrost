'use strict';

angular.module('bifrostApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.appointment', {
        url: 'appointment',
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
