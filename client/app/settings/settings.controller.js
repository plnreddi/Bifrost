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



/*
(function() {
  
    'use strict';

    angular
        .module('ngfrm1App')
        .controller('PatientCtrl', function (patientData) {

        var vm = this;

        vm.onSubmit = onSubmit;
       
        vm.loadingData = patientData.getModelFields().then(function(result) {
            vm.model = result[0];
            vm.patientFields = result[1];
            vm.medicalHistoryFields = result[2];
            vm.originalFields = angular.copy(result);
        });

        function onSubmit() {
            alert(JSON.stringify(vm.model), null, 2);
        }

    });
  
})();

*/ /*
        var patientDetailsForm = [{
          className: 'row',
          fieldGroup: [{
            className: 'col-md-6',
            type: 'input',
            key: 'firstName',
            templateOptions: {
              label: 'First Name'
            }
          }, {
            className: 'col-md-6',
            type: 'input',
            key: 'lastName',
            templateOptions: {
              label: 'Last Name'
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.firstName'
            }
          }]
        }];

        var clinicDetailsForm = [{
          className: 'row',
          fieldGroup: [{
            className: 'col-md-6',
            type: 'input',
            key: 'firstName',
            templateOptions: {
              label: 'First Name'
            }
          }, {
            className: 'col-md-6',
            type: 'input',
            key: 'lastName',
            templateOptions: {
              label: 'Last Name'
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.firstName'
            }
          }]
        }, {
          template: '<hr /><div><strong>Address:</strong></div>'
        }, {
          className: 'row',
          fieldGroup: [{
            className: 'col-md-4',
            type: 'input',
            key: 'street',
            templateOptions: {
              label: 'Street'
            }
          }, {
            className: 'col-md-4',
            type: 'input',
            key: 'cityName',
            templateOptions: {
              label: 'City'
            }
          }, {
            className: 'col-md-4',
            type: 'input',
            key: 'zip',
            templateOptions: {
              type: 'number',
              label: 'Zip',
              max: 99999,
              min: 0,
              pattern: '\\d{5}'
            }
          }]
        }, {
          template: '<hr />'
        }, {
          type: 'input',
          key: 'otherInput',
          templateOptions: {
            label: 'Other Input'
          }
        }, {
          type: 'checkbox',
          key: 'otherToo',
          templateOptions: {
            label: 'Other Checkbox'
          }
        }];
    

        vm.sampleFields = [
            {   type: 'input', key: 'patientName',
                templateOptions: { label: 'Patient Name' }
            },
            
            {   type: 'input', key: 'patientID',
                templateOptions: { label: 'Patient ID' }
            },

            {   type: 'input', key: 'aadhaarID',
                templateOptions: { label: 'Aadhaar ID' }
            }
        ];
*/
/*
        vm.loadingData = patientData.getModelFields().then(function(result) {
            vm.model = result[0];
            vm.patientFields = result[1];
            vm.medicalHistoryFields = result[2];
            vm.originalFields = angular.copy(result);
        
      
            vm.settingsForms = [
                {
                    title: 'New Patient Registration',
                    form: vm.patientFields
                }, 
                {
                    title: 'form2',
                    form: vm.medicalHistoryFields
                }, 
                {
                    title: 'form3'
                }
            ];

            vm.changeForm = function(index) {
                vm.settingsFields = vm.settingsForms[index].form;
            };
            
        });

*/