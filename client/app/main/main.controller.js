'use strict';

angular.module('bifrostApp')
  .controller('MainCtrl', function($scope, $http, uiCalendarConfig, $popover, $modal, Appointment, $rootScope) {

    this.eventSources = [];
    this.eventSourcesAll = {};
    var myPopover;

    function hashCode(str) { // java String#hashCode
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    }

    function intToRGB(i) {
      var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

      return '00000'.substring(0, 6 - c.length) + c;
    }

    this.userFields = [{
      key: 'selectedDoctorIds',
      type: 'multiCheckbox',
      templateOptions: {
        label: 'Doctors',
        options: [],
        valueProp: 'id',
        labelProp: 'username'
      },
      controller: function($scope, $rootScope) {
        $scope.to.options = $rootScope.currentClinic.doctors;
      },
      expressionProperties: {
        'eventSources': angular.bind(this, function(selectedDoctorIds) {
          if (selectedDoctorIds) {
            var eventSources = [];
            for (var i = 0; i < selectedDoctorIds.length; i++) {
              eventSources.push(this.eventSourcesAll[selectedDoctorIds[i]].appointments);
              eventSources.push(this.eventSourcesAll[selectedDoctorIds[i]].blocks);
            }
            this.eventSources.splice(0, this.eventSources.length);
            this.eventSources.push.apply(this.eventSources, eventSources);
            return eventSources;
          } else {
            return [[]];
          }
        })
      }
    }];

    /* config object */
    this.uiConfig = {
      calendar: {
        height: $(window).height() - 60,
        defaultView: 'agendaWeek',
        selectable: true,
        unselectCancel: '.aside-dialog',
        unselectAuto: true,
        select: function(start, end, jsEvent, view) {
          var calendar = uiCalendarConfig.calendars.myCalendar;
          $modal({
            title: 'New Appointment',
            templateUrl: 'app/main/appointment.modal.tpl.html',
            controller: 'AppointmentModalCtrl as AppointmentModalCtrl',
            resolve: {
              start: function() {
                return start;
              },
              end: function() {
                return end;
              },
              calendar: function() {
                return calendar;
              },
            },
            show: true,
          });
        },
        slotDuration: '00:15:00',
        editable: true,
        header: {
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: function(calEvent, jsEvent, view) {
          var calendar = uiCalendarConfig.calendars.myCalendar;
          if (myPopover) {
            myPopover.destroy();
          }
          myPopover = $popover(angular.element(this), {
            title: calEvent.title,
            templateUrl: 'app/main/popover.tpl.html',
            contentTemplate: 'app/main/popover-content.tpl.html',
            trigger: 'manual'
          });
          myPopover.$scope.event = calEvent;
          myPopover.$promise.then(myPopover.toggle);
          myPopover.$scope.deleteEvent = function() {
            calendar.fullCalendar('removeEvents', calEvent._id);
          };
        },
        eventDrop: this.alertOnDrop,
        eventResize: this.alertOnResize,
        eventRender: function(event, element) {
          element.find('.fc-title').append('<br/>' + event.title); 
        }
      }
    };

    Appointment.find({
        where: {
          doctorId: {
            inq: $rootScope.clinicDoctorIds
          }
        }
      },
      angular.bind(this, function(appointments) {
        for (var j = 0; j < $rootScope.clinicDoctorIds.length; j++) {
          var appointmentEvents = [];
          var blockEvents = [];
          for (var i = 0; i < appointments.length; i++) {
            if (appointments[i].doctorId == $rootScope.clinicDoctorIds[j]) {
              var event = {
                title: appointments[i].patientName || appointments[i].title,
                start: appointments[i].start,
                end: appointments[i].end,
                allDay: appointments[i].allDay
              };
              if (appointments[i].type == 'normal') {
                appointmentEvents.push(event);
              } else if (appointments[i].type == 'block') {
                blockEvents.push(event);
              }
            }
          }
          this.eventSourcesAll[$rootScope.clinicDoctorIds[j]] = {
            appointments: {
              color: '#' + intToRGB(hashCode($rootScope.currentClinic.doctors[j].username)),
              textColor: 'white',
              events: appointmentEvents
            },
            blocks: {
              color: '#ccc',
              textColor: 'white',
              events: blockEvents
            }
          };
        }
      })
    );

  });
