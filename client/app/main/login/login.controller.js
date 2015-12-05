'use strict';

angular.module('bifrostApp')
  .controller('LoginCtrl', function(Doctor, $rootScope, $state) {
    this.login = function() {
      if (!$rootScope.currentUser) {
        this.loginResult = Doctor.login({
            include: 'user',
            rememberMe: false
          }, this.credentials,
          function(user) {
            console.log(user);
            $rootScope.currentUser = user.user;
            $state.go('main');
          });
      }
    }
  });
