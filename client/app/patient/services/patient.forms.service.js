
/**
 * @ngdoc service
 * @name bifrostApp.Patient
 * @description
 * # Patient
 * Factory in the bifrostApp.
 */

(function() { 'use strict';

    angular
        .module('bifrostApp')  
        .factory('patientForms', function($timeout, $q, gettextCatalog) {  // patientData
 
        return {
            getPatientFields: getPatientFields,
            getMedicalHistoryFields: getMedicalHistoryFields,
            getVitalsFields: getVitalsFields,
            getAllergiesFields: getAllergiesFields,
            getModel: getModel,
            getModelFields: getModelFields
        };
        
        function getModelFields() {
            return $q.all([getModel(), getPatientFields(), getMedicalHistoryFields(), getVitalsFields(), getAllergiesFields() ]);
        }

        // model sample data
        function getModel() { return $timeout(model, 100); } 
        function model() {
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
                "city": "visakhapatnam",

                'patientage': '50',
                'height': '60',
                'weight': '150',
                'bp': '120/80',
                'temp': '98',
                'pulse': '70',
                'rr': '14',
                'o2sat': '50',
                'pain': 'nopain',
                
                'medicalHistory': {
                    'Hypertension': true,
                    "Diabetes": true,
                    "Asthma": true,
                    "Epilepsy": true, 
                    "Heart Disease": true,
                    "Allergies": true,
                    "Gastric Ulcers": true, 
                    "Pregnant/Breast Feeding": true,
                    "Undergone Dental Treatment Earlier": true,
                    "Low Bllod Pressure": true, 
                    "Anemic": true, 
                    "Hepatitis A B/C/D/E": true,
                    "AIDS HIV positive": true
                },
                
                'selectAllergen': 'food',
                'severity': 'moderate' ,
                'onset': 'adulthood',
                "comment": "This is a sample comment",
                'status': 'active' 
            };
        }
        

        // Patient personnel data
        function getPatientFields() { return $timeout(patientFields, 1500); }   //1500
        function patientFields() {
             return [
                //{ "template": "<div><h4>Patient Details</h4></div><hr />" },

                {   type: 'input', key: 'patientName',
                    ngModelElAttrs: { class: 'form-control input-sm'},
                    //templateOptions: { label: 'Patient Name' }  
                    templateOptions: { label: gettextCatalog.getString('Patient Name') }
                },
                
                {   type: 'inputsm', key: 'patientID',
                    //templateOptions: { label: 'Patient ID' }
                    templateOptions: { label: gettextCatalog.getString('Patient ID') }
                },

                {   type: 'inputsm', key: 'aadhaarId',
                    //templateOptions: { label: 'Aadhaar ID' }
                    templateOptions: { label: gettextCatalog.getString('Aadhaar ID') }
                },

                {   type: 'radioinline', key: 'gender',
                    templateOptions: { label: 'Gender', 
                        options: [
                            { name: 'Male', 'value': 'Male' },
                            { name: 'Female', 'value': 'Female' }
                        ]
                    }
                },

                {   type: 'inputsm', key: 'dateOfBorth',
                    templateOptions: { label: 'Date of Borth' }
                },
                {   type: 'inputsm', key: 'age',
                    templateOptions: { label: 'Age' }
                },

        
                
                {   type: 'select', key: 'bloodGroup',
                    templateOptions: { label: 'Blood Group',
                        options: [
                            {name: 'O+',  value: 'O+' },
                            {name: 'O-',  value: 'O-' },
                            {name: 'A+',  value: 'a_positive' },
                            {name: 'A-',  value: 'a_negative' },
                            {name: 'B+',  value: 'c_positive' },
                            {name: 'B-',  value: 'c_negative' },
                            {name: 'AB+', value: 'ab_positive'},
                            {name: 'AB-', value: 'ab_negative'}
                            
                        ]
                    }
                },

                {   type: 'inputsm', key: 'family',
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

                {   type: 'input', key: 'patientAddress.street',
                    templateOptions: { label: 'Street Address' }
                },
                {   type: 'input', key: 'patientAddress.city',
                    templateOptions: { label: 'City' }
                },
                {   type: 'input', key: 'patientAddress.state',
                    templateOptions: { label: 'State' }
                },
                {   type: 'input', key: 'patientAddress.zipCode',
                    templateOptions: { label: 'Zip Code' }
                }


            ]
        }

        // Patient Medical History
        function getMedicalHistoryFields() { return $timeout(medicalHistoryFields, 1500); }  //1500
        function medicalHistoryFields() {
            return [
                //{ "template": "<div><h4>Medical History</h4></div><hr />" },

                {   type:"multi-checkbox", key: "medicalHistory",
                    templateOptions: { label: 'Select whichever applicable', 
                        options: [
                            { "name": "Hypertension","value": "Hypertension" },
                            { "name": "Diabetes","value": "diabetes" },
                            { "name": "Asthma","value": "asthma" },
                            { "name": "Epilepsy","value": "epilepsy" },
                            { "name": "Heart Disease","value": "heartDisease" },
                            { "name": "Allergies","value": "allergies" },
                            { "name": "Gastric Ulcers","value": "gastricUlcers" },
                            { "name": "Pregnant/Breast Feeding","value": "pregnantBreastFeeding" },
                            { "name": "Undergone Dental Treatment Earlier","value": "undergoneDentalTreatment" },
                            { "name": "Low Bllod Pressure","value": "lowBllodPressure" },
                            { "name": "Anemic","value": "anemic" },
                            { "name": "Hepatitis A B/C/D/E","value": "hepatitis" },
                            { "name": "AIDS HIV positive","value": "AIDSHIVpositive" }
                        ]
                    }
                }

            ]
        }

        // Patient Vitals
        function getVitalsFields() { return $timeout(vitalsFields, 1500); }  //1500
        function vitalsFields() {
            return [
                //{ "template": "<div><h4>Vitals</h4></div><hr />" },

                {   type: 'inputsm', key: 'patientage',
                    templateOptions: { label: 'Patient Age' }
                },
                {   type: 'inputsm', key: 'height',
                    templateOptions: { label: 'Height', 'addonRight':{'text': 'in'} }      
                },
                {   type: 'inputsm', key: 'weight',
                    templateOptions: { label: 'Weight', 'addonRight':{'text': 'lb'} }
                },
                {   type: 'inputsm', key: 'bp',
                    templateOptions: { label: 'BP' }
                },
                {   type: 'inputsm', key: 'temp',
                    templateOptions: { label: 'Temp' }
                },
                {   type: 'inputsm', key: 'pulse',
                    templateOptions: { label: 'Pulse' }
                },
                {   type: 'inputsm', key: 'rr',
                    templateOptions: { label: 'RR' }
                },
                {   type: 'inputsm', key: 'o2sat',
                    templateOptions: { label: 'O2 SAT', 'addonRight':{'text': '%'} }
                },
                {   type: 'select', key: 'pain',
                    templateOptions: { label: 'Pain',
                        options: [
                            { name: 'No Pain', 'value': 'nopain' },
                            { name: 'Pain', 'value': 'pain' }
                        ]
                    }
                },
            ]
        }

        // Patient Allergies data
        function getAllergiesFields() { return $timeout(allergiesFields, 1500); }  //1500
        function allergiesFields() {
            return [
                //{ "template": "<div><h4>Allergies</h4></div><hr />" },
                
                {   type: 'radioinline', key: 'selectAllergen',
                    templateOptions: { label: 'Select Allergen', 
                        options: [
                            { name: 'Drug', 'value': 'drud' },
                            { name: 'Food', 'value': 'food' },
                            { name: 'Environment', 'value': 'environment' }
                        ]
                    }
                },
                {   type: 'radioinline', key: 'severity',
                    templateOptions: { label: 'Severity', 
                        options: [
                            { name: 'Very mild', 'value': 'verymild' },
                            { name: 'Mild', 'value': 'mild' },
                            { name: 'Moderate', 'value': 'moderate' },
                            { name: 'Severe', 'value': 'severe' }
                        ]
                    }
                },

                {   type: 'radioinline', key: 'onset',
                    templateOptions: { label: 'Onset', 
                        options: [
                            { name: 'Childhood', 'value': 'childhood' },
                            { name: 'Adulthood', 'value': 'adulthood' },
                            { name: 'Unknown', 'value': 'unknown' }
                        ]
                    }
                },

                {   "type": "textarea", "key": "comment",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Comment",
                        "rows": 4,
                        "cols": 15
                      }
                },


                {   type: 'radioinline', key: 'status',
                    templateOptions: { label: 'Status', 
                        options: [
                            { name: 'Active', 'value': 'active' },
                            { name: 'Inactive', 'value': 'inactive' }
                          
                        ]
                    }
                }

            ]
        } 

    });

})();
