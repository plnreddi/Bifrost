'use strict';

angular.module('bifrostApp')
  .controller('AppointmentModalCtrl', function(start, end, calendar, $q, $http, Doctor, $rootScope, Appointment) {

    this.appointment = {
      start: start,
      end: end
    };

    function refreshAddresses(address, field) {
      var promise;
      if (!address) {
        promise = $q.when({
          data: {
            results: []
          }
        });
      } else {
        var params = {
          address: address,
          sensor: false
        };
        var endpoint = '//maps.googleapis.com/maps/api/geocode/json';
        promise = $http.get(endpoint, {
          params: params
        });
      }
      return promise.then(function(response) {
        field.templateOptions.options = response.data.results;
      });
    }

    function refreshPatients(address, field) {
      return Doctor.patients({
        id: $rootScope.currentUser.id
      }, function(response) {
        field.templateOptions.options = response;
      });
    }

    var appointmentFields = [{
      key: 'patientName',
      type: 'async-ui-select',
      templateOptions: {
        'addonRight': {
          'class': 'glyphicon glyphicon-plus',
          onClick: function($options, $scope) {
            alert('ok');
          }
        },
        required: true,
        optionsAttr: 'bs-options',
        ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
        label: 'Patient Name(s)',
        valueProp: 'formatted_address',
        labelProp: 'formatted_address',
        placeholder: 'Enter Patient Name(s)',
        options: [],
        refresh: refreshAddresses,
        refreshDelay: 0
      }
    }, {
      key: 'chiefComplaint',
      type: 'textarea',
      templateOptions: {
        rows: 3,
        label: 'Chief Complaint',
        placeholder: 'Add any problems/symptoms here'
      }
    }, {
      key: 'doctor',
      type: 'select',
      defaultValue: $rootScope.currentUser.id || $rootScope.currentClinic.doctors[0].id,
      templateOptions: {
        label: 'Doctor',
        required: true,
        options: []
      },
      controller: function($scope, $rootScope) {
        var selectOptions = [];
        for (var i = 0; i < $rootScope.currentClinic.doctors.length; i++) {
          selectOptions.push({
            value: $rootScope.currentClinic.doctors[i].id,
            name: $rootScope.currentClinic.doctors[i].username
          });
        }
        $scope.to.options = selectOptions;
      },
    }, {
      'className': 'row',
      'fieldGroup': [{
        'className': 'col-xs-6',
        key: 'appointmentType',
        type: 'select',
        templateOptions: {
          label: 'Appointment Type',
          required: true,
          options: [{
            name: 'Wellness Exam',
            value: 'wellnessexam'
          }, {
            name: 'New Patient Visit',
            value: 'newpatient'
          }, {
            name: 'Urgent Visit',
            value: 'urgent'
          }, {
            name: 'nursing Visit',
            value: 'surnursinggery'
          }, {
            name: 'Follow-Up',
            value: 'followup'
          }, {
            name: 'other',
            value: 'other'
          }]
        }
      }, {
        'className': 'col-xs-3',
        key: 'duration',
        type: 'select',
        defaultValue: 15,
        templateOptions: {
          label: 'Duration',
          options: [{
            name: '15 mins',
            value: 15
          }, {
            name: '20 mins',
            value: 20
          }, {
            name: '25 mins',
            value: 25
          }]
        }
      }, {
        'className': 'col-xs-3',
        key: 'isAllDay',
        type: 'checkbox',
        templateOptions: {
          label: 'All day event?'
        }
      }]
    }];



    this.timeBlockFields = [{
      key: 'blockReason',
      type: 'select',
      templateOptions: {
        label: 'Reason',
        required: true,
        options: [{
          name: 'lunch',
          value: 'lunch'
        }, {
          name: 'meeting',
          value: 'meeting'
        }, {
          name: 'out of office',
          value: 'outofoffice'
        }, {
          name: 'surgery',
          value: 'surgery'
        }, {
          name: 'vacation',
          value: 'vacation'
        }, {
          name: 'other',
          value: 'other'
        }]
      },
      expressionProperties: {
        'apppointment.type': 'block'
      }
    }, {
      key: 'descrtiption',
      type: 'textarea',
      templateOptions: {
        rows: 3,
        label: 'Description'
      }
    }, {
      key: 'doctor',
      type: 'select',
      defaultValue: $rootScope.currentUser.id || $rootScope.currentClinic.doctors[0].id,
      templateOptions: {
        label: 'Doctor',
        required: true,
        options: []
      },
      controller: function($scope, $rootScope) {
        var selectOptions = [];
        for (var i = 0; i < $rootScope.currentClinic.doctors.length; i++) {
          selectOptions.push({
            value: $rootScope.currentClinic.doctors[i].id,
            name: $rootScope.currentClinic.doctors[i].username
          });
        }
        $scope.to.options = selectOptions;
      },
    }, {
      key: 'duration',
      type: 'select',
      defaultValue: 15,
      templateOptions: {
        label: 'Duration',
        options: [{
          name: '15 mins',
          value: 15
        }, {
          name: '20 mins',
          value: 20
        }, {
          name: '25 mins',
          value: 25
        }]
      }
    }, {
      key: 'isAllDay',
      type: 'checkbox',
      templateOptions: {
        label: 'All day event?'
      }
    }];

    this.submitDisabled = function() {
      if (this.activeTab == 0 && this.forms.appointmentForm.$invalid ||
        this.activeTab == 1 && this.forms.blockForm.$invalid) {
        return true;
      } else {
        return false;
      }
    };

    this.calendarUnselect = function() {
      calendar.fullCalendar('unselect');
    };
    this.createEvent = function(event) {
      if (this.activeTab == 0) {
        if (event.patientName) {
          Appointment.create({
            'type': 'normal',
            'start': start,
            'end': end,
            'patientName': event.patientName,
            'doctorId': event.doctor,
            'patientId': 0,
            'allDay': event.isAllDay
          });
          calendar.fullCalendar('renderEvent', {
              title: event.patientName,
              start: start,
              end: end
            },
            true // make the event 'stick'
          );
        }
      } else {
        if (event.blockReason) {
          Appointment.create({
            'type': 'block',
            'start': start,
            'end': end,
            'title': event.blockReason,
            'doctorId': event.doctor,
            'allDay': event.isAllDay
          });
          calendar.fullCalendar('renderEvent', {
              title: event.blockReason,
              start: start,
              end: end,
              color: '#ccc'
            },
            true // make the event 'stick'
          );
        }
      }
      calendar.fullCalendar('unselect');
    };
    this.appointmentFields = appointmentFields;
  });
