'use strict';

angular.module('bifrostApp')
  .controller('SettingsCtrl', function(settings) {
    this.settings = settings.getAllSettings();

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

    this.settingsForms = [{
      title: 'form1',
      form: clinicDetailsForm
    }, {
      title: 'form2',
      form: patientDetailsForm
    }, {
      title: 'form3'
    }];

    this.changeForm = function(index) {
      this.settingsFields = this.settingsForms[index].form;

    };

  });
