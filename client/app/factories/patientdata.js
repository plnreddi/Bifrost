

/**
 * @ngdoc service
 * @name ngfrm1App.Patient
 * @description
 * # Patient
 * Factory in the ngfrm1App.
 */

 /*
angular.module('ngfrm1App')
  .factory('Patient', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

*/


(function() {
  
    'use strict';

    angular
        .module('ngfrm1App')  
        .factory('patientData', function($timeout, $q) {
 
        return {
            getPatientFields: getPatientFields,
            getMedicalHistoryFields: getMedicalHistoryFields,
            getModel: getModel,
            getModelFields: getModelFields
        };
        
        function getModelFields() {
            return $q.all([getModel(), getPatientFields(), getMedicalHistoryFields() ]);
        }

        function getModel() {
            return $timeout(function() {
              /*
                return {
                  
                    "patientName": "Neil S.",
                    'patientID': '1234'
                  
                };
*/
                return {
                    "patientName": "Neil S.",
                    "patientID": "P130142",
                    "locality": "CMR Central",
                    "aadhaarID": "56789",
                    "gender": "male",
                    "dateOfBorth": "jul 16, 1980",
                    "age": "33",
                    "referredBy": "practo",
                    "bloodGroup": "o_positive",
                    "family": "Sudhir Nair",
                    "relation": "sibling",
                    "primaryMobileNo": "1234567890",
                    "secondaryMobileNo": "1234567890",
                    "emailAddress": "plnreddi@gmail.com",
                    "streetAddress": "52-10-42, VIP Road, Maddilapalem",
                    "city": "visakhapatnam"
                };

            }, 100);
        }

        function getPatientFields() { return $timeout(patientFields, 1500); }
        function patientFields() {
             return [
                {   type: 'input', key: 'patientName',
                    templateOptions: { label: 'Patient Name' }
                },
                
                {   type: 'input', key: 'patientID',
                    templateOptions: { label: 'Patient ID' }
                },

                {   type: 'input', key: 'aadhaarID',
                    templateOptions: { label: 'Aadhaar ID' }
                },

                {   type: 'radio', key: 'gender',
                    templateOptions: { label: 'Gender', 
                        options: [
                            { name: 'Male', 'value': 'male' },
                            { name: 'Female', 'value': 'female' }
                        ]
                    }
                },

                {   type: 'input', key: 'dateOfBorth',
                    templateOptions: { label: 'Date of Borth' }
                },

                {   type: 'input', key: 'age',
                    templateOptions: { label: 'Age' }
                },

                {   type: 'select', key: 'referredBy',
                    templateOptions: { label: 'Referred by',
                        options: [
                            {name: 'Practo.com', value: 'practo'},
                            {name: 'Xyz.com', value: 'xyz'}
                            
                        ]
                    }
                },

                {   type: 'select', key: 'bloodGroup',
                    templateOptions: { label: 'Blood Group',
                        options: [
                            {name: 'O+',  value: 'o_positive' },
                            {name: 'O-',  value: 'o_negative' },
                            {name: 'A+',  value: 'a_positive' },
                            {name: 'A-',  value: 'a_negative' },
                            {name: 'B+',  value: 'c_positive' },
                            {name: 'B-',  value: 'c_negative' },
                            {name: 'AB+', value: 'ab_positive'},
                            {name: 'AB-', value: 'ab_negative'}
                            
                        ]
                    }
                },

                {   type: 'input', key: 'family',
                    templateOptions: { label: 'Family' }
                },

                {   type: 'select', key: 'relation',
                    templateOptions: { label: 'Relation',
                        options: [
                            {name: 'Parent',  value: 'parent' },
                            {name: 'Sibling', value: 'sibling' },
                            {name: 'Spouse',  value: 'spouse' }
                        ]
                    }
                },

                { "template": "<hr /><div><strong>Address:</strong></div>" },

                {   type: 'input', key: 'primaryMobileNo',
                    templateOptions: { label: 'Primary Mobile No.' }
                },

                {   type: 'input', key: 'secondaryMobileNo',
                    templateOptions: { label: 'Secondary Mobile No.' }
                },

                {   type: 'input', key: 'secondaryMobileNo',
                    templateOptions: { label: 'Land Line No.' }
                },

                {   type: 'input', key: 'emailAddress',
                    templateOptions: { label: 'Email Address' }
                },

                {   type: 'input', key: 'streetAddress',
                    templateOptions: { label: 'Street Address' }
                },

                {   type: 'input', key: 'locality',
                    templateOptions: { label: 'Locality' }
                },

                {   type: 'input', key: 'city',
                    templateOptions: { label: 'City' }
                }
            ]
        }


        function getMedicalHistoryFields() { return $timeout(medicalHistoryFields, 1500); }
        function medicalHistoryFields() {
            return [

                {   type: 'checkbox', key: 'hypertension',
                    templateOptions: { label: 'Hypertension' }
                },

                {   type: 'checkbox', key: 'diabetes',
                    templateOptions: { label: 'Diabetes' }
                },

                {   type: 'checkbox', key: 'asthma',
                    templateOptions: { label: 'Asthma' }
                },

                {   type: 'checkbox', key: 'epilepsy',
                    templateOptions: { label: 'Epilepsy' }
                },
                
                {   type: 'checkbox', key: 'heartDisease',
                    templateOptions: { label: 'Heart Disease' }
                },

                {   type: 'checkbox', key: 'allergies',
                    templateOptions: { label: 'Allergies' }
                },

                {   type: 'checkbox', key: 'gastricUlcers',
                    templateOptions: { label: 'Gastric Ulcers' }
                },

                {   type: 'checkbox', key: 'pregnantBreastFeeding',
                    templateOptions: { label: 'Pregnant/Breast Feeding' }
                },

                {   type: 'checkbox', key: 'undergoneDentalTreatment',
                    templateOptions: { label: 'Undergone Dental Treatment Earlier' }
                },

                {   type: 'checkbox', key: 'lowBllodPressure',
                    templateOptions: { label: 'Low Bllod Pressure' }
                },

                {   type: 'checkbox', key: 'anemic',
                    templateOptions: { label: 'Anemic' }
                },

                {   type: 'checkbox', key: 'hepatitisA',
                    templateOptions: { label: 'Hepatitis A B/C/D/E' }
                },

                {   type: 'checkbox', key: 'AIDSHIVpositive',
                    templateOptions: { label: 'AIDS HIV positive' }
                }
 
            ]
        }


    });

})();


        