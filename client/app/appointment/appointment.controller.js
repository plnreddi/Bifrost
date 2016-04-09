'use strict';

angular.module('bifrostApp')
  .controller('AppointmentCtrl', function($scope, $http, uiCalendarConfig, $popover, $modal, Appointment, $rootScope, $interval, settings, Modal) {

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
        $scope.to.options = $rootScope.currentHospital.doctors;
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

    var timelineIntervalPromise;
    var renderCurrentTimeline = function(view, element, anchor) {
      var currentDate = moment();
      var intervalStart = view.intervalStart.clone()
        .year(view.intervalStart.year())
        .month(view.intervalStart.month())
        .day(view.intervalStart.day())
        .time('00:00:00');
      var intervalEnd = view.intervalEnd.clone()
        .year(view.intervalEnd.year())
        .month(view.intervalEnd.month())
        .day(view.intervalEnd.day())
        .time('00:00:00');

      if (view.name === 'month' || !currentDate.isBetween(intervalStart, intervalEnd)) {
        return;
      }

      var timeGrid = element.find('.fc-time-grid');
      var timeline = angular.element('<hr class="timeline" />');
      timeGrid.find('hr.timeline').remove();
      timeGrid.prepend(timeline);

      var calMinTimeInMinutes = moment.duration(view.opt('minTime')).asMinutes();
      var calMaxTimeInMinutes = moment.duration(view.opt('maxTime')).asMinutes();
      var curSeconds = ((((currentDate.hours() * 60) + currentDate.minutes()) - calMinTimeInMinutes) * 60) + currentDate.seconds();
      var percentOfDay = curSeconds / ((calMaxTimeInMinutes - calMinTimeInMinutes) * 60);
      var topLoc = Math.floor(timeGrid.height() * percentOfDay);
      var timeCol = element.find('.fc-time:visible');
      timeline.css({
        top: topLoc,
        left: timeCol.outerWidth(true)
      });
      if (angular.isUndefined(anchor) || anchor === true) {
        timeGrid.parent().scrollTop(timeline.offset().top);
      }

      if (view.name === 'agendaWeek') { // Week view, don't want the timeline to go the whole way across.
        var dayCol = element.find('.fc-time-grid .fc-bg .fc-today');
        var left = dayCol.position().left + 1;
        var width = dayCol.width() + 1;
        timeline.css({
          left: left,
          width: width
        });
      }

      if (angular.isDefined(timelineIntervalPromise)) {
        $interval.cancel(timelineIntervalPromise);
      }
      timelineIntervalPromise = $interval(function() {
        var view = uiCalendarConfig.calendars.myCalendar.fullCalendar('getView');
        renderCurrentTimeline(view, view.el, false);
      }, 300000);
    };

    /* config object */
    this.uiConfig = {
      calendar: {
        height: $(window).height() - 60,
        defaultView: 'agendaWeek',
        selectable: true,
        unselectCancel: '.aside-dialog',
        unselectAuto: true,
        scrollTime: settings.getSetting('buisinessHoursStart') || '10:00',
        select: function(start, end, jsEvent, view) {
          var calendar = uiCalendarConfig.calendars.myCalendar;
          $modal({
            title: 'New Appointment',
            templateUrl: 'app/appointment/appointment.modal.tpl.html',
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
            templateUrl: 'app/appointment/popover.tpl.html',
            contentTemplate: 'app/appointment/popover-content.tpl.html',
            trigger: 'manual'
          });
          myPopover.$scope.event = calEvent;
          myPopover.$promise.then(myPopover.toggle);
          myPopover.$scope.deleteEvent = function() {
            calendar.fullCalendar('removeEvents', calEvent._id);
            Appointment.deleteById({
              id: calEvent.id
            })
              .$promise
              .then(function() {
              });
          };
        },
        businessHours: {
          start: settings.getSetting('buisinessHoursStart') || '10:00', // a start time (10am in this example)
          end: settings.getSetting('buisinessHoursEnd') || '18:00', // an end time (6pm in this example)
          dow: settings.getSetting('buisinessHoursDOW').split(',') || [1, 2, 3, 4, 5]
        },
        eventDrop: function(event, delta, revertFunc) {

          if (!confirm('Are you sure about this change?')) {
            revertFunc();
          } else {
            Appointment.findById({
                id: event.id
              },
              angular.bind(this, function(appointment) {
                appointment.startTime = event.start;
                appointment.endTime = event.end;
                appointment.$save();

              }));
          }

        },
        eventResize: function(event, delta, revertFunc) {

          if (!confirm('is this okay?')) {
            revertFunc();
          } else {
            Appointment.findById({
                id: event.id
              },
              angular.bind(this, function(appointment) {
                appointment.startTime = event.start;
                appointment.endTime = event.end;
                appointment.$save();

              }));
          }

        },
        eventRender: function(event, element) {
          if (event.type == 'normal') {
            element.find('.fc-content').prepend('<span class="label label-primary">' + event.status + '</span>');
          }
          var ntoday = new Date().getTime();
          var eventEnd = moment(event.end).valueOf();
          var eventStart = moment(event.start).valueOf();
          if (!event.end) {
            if (eventStart < ntoday) {
              element.addClass('past-event');
            }
          } else {
            if (eventEnd < ntoday) {
              element.addClass('past-event');
            }
          }
        },
        viewRender: function(view, element, anchor) {
          renderCurrentTimeline(view, element, anchor);
        },
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
                id: appointments[i].id,
                title: appointments[i].patientName || appointments[i].title,
                start: appointments[i].startTime,
                end: appointments[i].endTime,
                allDay: appointments[i].allDay,
                status: appointments[i].status,
                type: appointments[i].appointmentType
              };
              if (event.type == 'normal') {
                appointmentEvents.push(event);
              } else if (event.type == 'block') {
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
