'use strict';

angular.module('bifrostApp')
  .controller('MainCtrl', function($http, uiCalendarConfig, $popover, $modal) {

    this.eventSources = [];
    var myPopover;

    /* config object */
    this.uiConfig = {
      calendar: {
        height: 600,
        defaultView: 'agendaWeek',
        selectable: true,
        unselectCancel: '.aside-dialog',
        unselectAuto: true,
        select: function(start, end, jsEvent, view) {
          var calendar = uiCalendarConfig.calendars.myCalendar;
          var myAside = $modal({
            title: 'New Appointment',
            templateUrl: 'app/main/modal.tpl.html',
            contentTemplate: 'app/main/modal-content.tpl.html',
            show: true
          });
          myAside.$scope.appointment = {
            start: start,
            end: end
          };
          myAside.$scope.calendarUnselect = function() {
            calendar.fullCalendar('unselect');
          }
          myAside.$scope.createAppointment = function(patientName) {
            if (patientName) {
              calendar.fullCalendar('renderEvent', {
                  title: patientName,
                  start: start,
                  end: end
                },
                true // make the event "stick"
              );
            }
            calendar.fullCalendar('unselect');
          }
        },
        slotDuration: '00:15:00',
        editable: true,
        header: {
          left: 'month basicWeek basicDay agendaWeek agendaDay',
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
        events: [{
          title: 'event1',
          start: '2016-01-01'
        }, {
          title: 'event2',
          start: '2016-01-05',
          end: '2016-01-07'
        }, {
          title: 'event3',
          start: '2016-01-09T12:30:00',
          allDay: false // will make the time show
        }]
      }
    };
  });
