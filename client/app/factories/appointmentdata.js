


/**
 * @ngdoc service
 * @name ngfrm1App.practiceData
 * @description
 * # practiceData
 * Factory in the ngfrm1App.
 */

(function() {
  
   'use strict';

    angular
        .module('ngfrm1App')  
        .factory('appointmentData', function($timeout, $q) {
 
        return {
            
            getAppointmentFields :getAppointmentFields,
            getEventFields: getEventFields,

            getModal: getModal,

            getModalFields: getModalFields
        };
        /*
        function getModal() {
            return $timeout(function() {
                return {
                    "patientName": "Joan"
                };
            }, 100);
        }
        */
        function getModal() { return $timeout(modalFields, 100); }
        function modalFields() {
            return {
                "patientName": "Joan"
            };
        }

        function getModalFields() {
            return $q.all([ getModal(), getAppointmentFields(), getEventFields(), getAppointmentTabs() ]);
        }

        function getAppointmentFields() { return $timeout(appointmentFields, 1500); }
        function appointmentFields() {
            return [
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

                {   type: 'radio', key: 'notifyPatient',
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

                {   type: 'radio', key: 'notifyDoctor',
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








/*
vm.tabs = [
    {
        title: 'Tab 1',
        active: true,
        form: {
            options: {},
            model: vm.model,
            fields: [
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'Username',
                        type: 'email',
                        placeholder: 'Email address',
                        required: true
                    }
                }
            ]
        }
    },

    {
        title: 'Tab 2',
        form: {
            options: {},
            model: vm.model,
            fields: [
                {
                    key: 'firstName',
                    type: 'input',
                    templateOptions: {
                        label: 'First Name',
                        required: true
                    }
                },
                {
                    key: 'lastName',
                    type: 'input',
                    templateOptions: {
                        label: 'Last Name',
                        required: true
                    }
                }
            ] 
        }
    }
];
*/