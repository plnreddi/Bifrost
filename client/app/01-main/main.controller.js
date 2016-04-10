'use strict';

angular.module('bifrostApp')
  .controller('MainCtrl', function(Doctor, $rootScope, $state) {

    this.menuoptions = $rootScope.menu;

    this.isActive = function(root) {
        return $state.includes(root);
    };

    this.logout = function() {
      Doctor.logout(function() {
        $state.go('login');
        $rootScope.currentUser = null;
      });
    };
  });
