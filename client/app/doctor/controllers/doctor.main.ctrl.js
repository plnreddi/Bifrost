
(function () { 'use strict';
  angular
    .module('bifrostApp')
    /**
     * @ngdoc function
     * @name bifrostApp.about.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the clientApp
     */
    .controller('DoctorMainCtrl', function () {
        
            var vm = this;
                
            vm.items = [
                //{ name: 'New Doctor Demographics', sref: 'main.doctor.newdemo' },
                //{ name: 'New Doctor Medical Info', sref: 'main.doctor.newmedi' },
                { name: 'New Doctor Full Info', sref: 'main.doctor.new' },
                //{ name: 'Old Doctor Demographics', sref: 'main.doctor.olddemo' },
                //{ name: 'Old Doctor Medical Info', sref: 'main.doctor.oldmedi' },
                { name: 'Old Doctor Full Info', sref: 'main.doctor.old' }
            ];
        
        
        
        
    });

})();
