

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
        .factory('practiceData', function($timeout, $q) {
 
        return {
            getPracticeFields: getPracticeFields,
            getModel: getModel,
            getModelFields: getModelFields
        };
        
        function getModelFields() {
            return $q.all([getModel(), getPracticeFields()]);
        }

        function getModel() {
            return $timeout(function() {
                return {
                    "practiceName": "Joan"
                };
            }, 100);
        }

        function getPracticeFields() { return $timeout(practiceFields, 1500); }
        function practiceFields() {
            return [
                {   type: 'input', key: 'practiceName',
                    templateOptions: { label: 'Practice Name' }
                },
                {   type: 'input', key: 'practiceTagline',
                    templateOptions: { label: 'Practice Tagline' }
                },
                {   type: 'select', key: 'practiceSpecification',
                    templateOptions: { label: 'Practice Specification',
                        options: [
                            {name: 'Iron Man', value: 'iron_man'},
                            {name: 'Captain America', value: 'captain_america'},
                            {name: 'Black Widow', value: 'black_widow'},
                            {name: 'Hulk', value: 'hulk'},
                            {name: 'Captain Marvel', value: 'captain_marvel'}
                        ]
                    }
                },
                {   type: 'input', key: 'practiceStreetAddress',
                    templateOptions: { label: 'Practice Street Address' }
                },
                {   type: 'input', key: 'practiceLocality',
                    templateOptions: { label: 'Practice Locality' }
                },
                {   type: 'select', key: 'practiceCountry',
                    templateOptions: { label: 'Practice Country', 
                    options: [
                            {name: 'India', value: 'india'},
                            {name: 'America', value: 'america'},
                            {name: 'Singapore', value: 'singapore'}
                        ]
                    }
                },
                {   type: 'select', key: 'practiceState',
                    templateOptions: { label: 'Practice State',
                        options: [
                            {name: 'Andhra Pradesh', value: 'andhra_pradesh'},
                            {name: 'Telangana', value: 'telangana'},
                            {name: 'Karnataka', value: 'karnataka'}
                        ]
                    }
                },

                {   type: 'select', key: 'practiceCity',
                    templateOptions: { label: 'Practice City',
                        options: [
                            {name: 'Visakhapatnam', value: 'visakhapatnam'},
                            {name: 'Vijayawada', value: 'vijayawada'},
                            {name: 'Kakinada', value: 'kakinada'}
                        ]
                    }
                },
                {   type: 'input', key: 'practicePinCode',
                    templateOptions: { label: 'Practice PinCode' }
                },
                {   type: 'input', key: 'practiceContactNumber',
                    templateOptions: { label: 'Practice Contact Number' }
                },
                {   type: 'input', key: 'practiceEmail',
                    templateOptions: { label: 'Practice Email' }
                },
                {   type: 'input', key: 'practiceWebsite',
                    templateOptions: { label: 'Practice Website' }
                },
                {   type: 'input', key: 'practiceTimeZone',
                    templateOptions: { label: 'Practice TimeZone' }
                }

            ]
        }


    });

})();




