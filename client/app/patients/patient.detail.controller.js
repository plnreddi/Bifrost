'use strict';

angular.module('bifrostApp')
  .controller('PatientDetailCtrl', function($stateParams, Patient) {
    Patient.findById({
      id: $stateParams.id
    }, angular.bind(this, function(patient) {
      this.patient = patient;
    }));

    this.patientFields = [{
      'className': 'row',
      'fieldGroup': [{
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'input-1451712762231',
        'templateOptions': {
          'type': '',
          'label': 'First Name',
          'required': false,
          'placeholder': '',
          'description': '',
          'options': []
        }
      }, {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'input-1451712773087',
        'templateOptions': {
          'type': '',
          'label': 'Last Name',
          'required': false,
          'placeholder': '',
          'description': '',
          'options': []
        }
      }]
    }, {
      'className': 'row',
      'fieldGroup': [{
        'className': 'col-xs-6',
        'type': 'radio',
        'key': 'radio-1451712697033',
        'templateOptions': {
          'type': '',
          'label': 'Sex',
          'required': true,
          'placeholder': '',
          'description': '',
          'options': [{
            'name': 'Male',
            'value': 0,
            'group': ''
          }, {
            'name': 'Female',
            'value': 1,
            'group': ''
          }]
        }
      }, {
        'className': 'col-xs-6',
        'type': 'datepicker',
        'key': 'datepicker-1451712725944',
        'templateOptions': {
          'type': '',
          'label': 'Date of Birth',
          'required': true,
          'placeholder': '',
          'description': '',
          'options': [],
          'datepickerPopup': ''
        }
      }]
    }];
  });
