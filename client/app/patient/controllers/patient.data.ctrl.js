(function() { 'use strict';

    angular
        .module('bifrostApp')
        /**
         * @ngdoc directive
         * @name bifrostApp.directive:adminHeader
         * @description
         * @param {string} title Title
         * @param {string} subTitle Subtitle
         * # adminHeader
         */
        .controller('PatientDataCtrl', function(patientForms, patientData) {  

            var vm = this;
            
            patientData.getPatients(function(data) {
                vm.model = data[0];
                console.log(vm.model);
            }); 
          
            // funcation assignment
            vm.onSubmit = onSubmit;
            
            vm.loadingData = patientForms.getModelFields().then(function(result) {
                //vm.model = result[0];
                vm.fields1 = result[1];
                vm.fields2 = result[2];
                vm.fields3 = result[3];
                vm.fields4 = result[4];
                vm.originalFields = angular.copy(result);
                
                vm.fields1a = vm.fields1.slice(0,10);
                vm.fields1b = vm.fields1.slice(7,18);
            });
            
            function onSubmit() {
                alert(JSON.stringify(vm.model), null, 2);
            }

        });

})();