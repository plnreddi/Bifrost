(function() {

    'use strict';

    angular.module('bifrostApp')
    .controller('TestCtrl', function(patientForms) {  //PatientData1

      	var vm = this;
        vm.loadingData = patientForms.getModelFields().then(function(result) {
            vm.model = result[0];
            vm.fields1 = result[1];
            vm.fields2 = result[2];
            vm.fields3 = result[3];
            vm.fields4 = result[4];
            vm.originalFields = angular.copy(result);
             
            vm.fields1a = vm.fields1.slice(0,10);
            vm.fields1b = vm.fields1.slice(10,18);
  
            // console.log(vm.fields1[0].templateOptions.label);
            // console.log(vm.model[vm.fields1[0].key]);
            
        });

        vm.cond = 'New-Patient';
        vm.url = 'new-patient.html';
   });

})();

