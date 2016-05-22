(function () { 'use strict';

    angular
        .module('bifrostApp')
        .controller('PatientMainCtrl', function (patientForms) {

            var vm = this;
                
            vm.items = [
                { name: 'New Patient Demographics', sref: 'main.patient.newdemo' },
                { name: 'New Patient Medical Info', sref: 'main.patient.newmedi' },
                { name: 'New Patient Full Info', sref: 'main.patient.new' },
                { name: 'Old Patient Demographics', sref: 'main.patient.olddemo' },
                { name: 'Old Patient Medical Info', sref: 'main.patient.oldmedi' },
                { name: 'Old Patient Full Info', sref: 'main.patient.old' }
            ];
            
          
            
        });
        
})();
