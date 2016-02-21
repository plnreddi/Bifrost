(function() {

    'use strict';

    angular.module('bifrostApp')
        .controller('SettingsCtrl', function(settings, patientData, practiceData, appointmentData) {

        var vm = this;

        vm.settings = settings.getAllSettings();
   
        vm.settingsForms = [
            {
                title: 'New Patient Registration'
            }, 
            {
                title: 'Practice'
            }, 
            {
                title: 'Appointment'
            }
        ];

        vm.changeForm = function(index) {
            switch (index) {
                case 0:
                    vm.loadingData = patientData.getModelFields().then(function(result) {
                        vm.model = result[0];
                        vm.fields1 = result[1];
                        vm.fields2 = result[2];
                        vm.fields3 = result[3];
                        vm.fields4 = result[4];
                        vm.originalFields = angular.copy(result);
                    });
                    break; 

                case 1:
                    vm.loadingData = practiceData.getModelFields().then(function(result) {
                        vm.model = result[0];
                        vm.fields1 = result[1];
                        vm.fields2 = {};     
                        vm.originalFields = angular.copy(result);
                    });
                    break; 

                default: 
                    vm.loadingData = appointmentData.getModalFields().then(function(result) {
                        vm.model = result[0];
                        vm.fields1 = result[1];
                        vm.fields2 = result[2];
                    //  vm.fields2 = result[3];
                        vm.originalFields = angular.copy(result);
                    });
            }
        };

    });

})();


