// grep -rnw '/home/plnreddi/ngdev/Bifrost1/client' -e "ngfrm1App"


/**
 * @ngdoc service
 * @name bifrostApp.appointmentData
 * @description
 * # appointmentData
 * Factory in the bifrostApp.
 */

(function() {
  
   'use strict';

    angular
        .module('bifrostApp')  
        .factory('appointmentData', function($timeout, $q) {
 
        return {
            
            getAppointmentFields :getAppointmentFields,
            getEventFields: getEventFields,

            getModal: getModal,

            getModalFields: getModalFields
        };

        // Sample model data
        function getModal() { return $timeout(modalFields, 100); }
        function modalFields() {
            return {
                "patientName": "Joan"
            };
        }

        function getModalFields() {
            return $q.all([ getModal(), getAppointmentFields(), getEventFields(), getAppointmentTabs() ]);
        }

        // Doctor appointment details
        function getAppointmentFields() { return $timeout(appointmentFields, 1500); }
        function appointmentFields() {
            return [
                { "template": "<div><h4>Appointment</h4></div><hr />" },

                {   type: 'input', key: 'scheduledOn',
                    templateOptions: { label: 'Scheduled on' }
                },

                {   type: 'input', key: 'patientName',
                    templateOptions: { label: 'Patient Name' }
                },

                {   type: 'input', key: 'patientID',
                    templateOptions: { label: 'Patient ID' }
                },

                {   type: 'input', key: 'patientEmail',
                    templateOptions: { label: 'Patient Email' }
                },

                {   type: 'radioinline', key: 'notifyPatient',
                    templateOptions: { label: 'Notify Patient', 
                        options: [
                            { name: 'Via SMS', 'value': 'via_sms' },
                            { name: 'Via Email', 'value': 'via_email' }
                        ]
                    }
                },

                {   type: 'select', key: 'doctor',
                    templateOptions: { label: 'Doctor', 
                        options: [
                            { name: 'Dr. Krishna Rao', value: 'dr_krishna_rao'},
                            { name: 'Dr. Rama Rao', value: 'dr_rama_rao'}
                        ]
                    }
                },

                {   type: 'radioinline', key: 'notifyDoctor',
                    templateOptions: { label: 'Notify Doctor', 
                        options: [
                            { name: 'Via SMS', value: 'via_sms' },
                            { name: 'Via Email', value: 'via_email' }
                        ]
                    }
                },

                {   type: 'input', key: 'category',
                    templateOptions: { label: 'Category' }
                },

                {   type: 'input', key: 'proceduresPlanned',
                    templateOptions: { label: 'Procedures Planned' }
                },

                {   type: 'input', key: 'notes',
                    templateOptions: { label: 'Notes' }
                }

            ]

        }

        function getEventFields() { return $timeout(eventFields, 1500); }
        function eventFields() {
            return [
                { "template": "<div><h4>Event</h4></div><hr />" },

                {   type: 'input', key: 'scheduledOn',
                    templateOptions: { label: 'Scheduled on' }
                },

                {   type: 'input', key: 'eventTitle',
                    templateOptions: { label: 'Event Title' }
                },

                {   type: 'select', key: 'doctor',
                    templateOptions: { label: 'Doctor', 
                        options: [
                            { name: 'Dr. Krishna Rao', value: 'dr_krishna_rao' },
                            { name: 'Dr. Rama Rao', value: 'dr_rama_rao' }
                        ]
                    }
                },

                {   type: 'checkbox', key: 'checkThis',
                    templateOptions: { label: 'Mark Doctor(s) as available for appointment booking' }
                }

            ];
        }

        // Sample Tabs
        function getAppointmentTabs() { return $timeout(appointmentTabs, 1500); }
        function appointmentTabs() {
            return [
                {   title: 'Appointment',
                    active: true,
                    form: {
                        options: {},
                        model: modalFields(),
                        fields: appointmentFields()
                    }
                },

                {   title: 'Event',
                    form: {
                        options: {},
                        model: modalFields(),
                        fields: eventFields()
                    }
                }
            ];
        }



    });

})();







