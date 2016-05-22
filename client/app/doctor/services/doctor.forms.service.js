
(function() { 'use strict';

    angular
        .module('bifrostApp')  
        /**
         * @ngdoc service
         * @name bifrostApp.DoctorData
         * @description
         * # DoctorData
         * Factory in the bifrostApp.
         */
        .factory('doctorForms', function($timeout, $q) {
 
        return {
            getDoctorFields: getDoctorFields,
            getModel: getModel,
            getModelFields: getModelFields
        };
        
        function getModelFields() {
            return $q.all([getModel(), getDoctorFields()]);
        }


        function getModel() {
            return $timeout(function() {
                
                return {
                    
                    id: 1, username: 'Jane', email: 'jane@doe.com', password: 'a', 
                    
                    doctorName: 'Dr. Ramesh',

                    "phoneVerified": true,
                    
                    "doctorCredentialOne": {
                        title: 'Intro',
                        descp: ['Dr Ramesh Raju did MB BS from JJM Medical College, Davangere in 1996. He completed Post graduate training (Master of Surgery in Otolaryngology and Head and Neck Surgery) ',
                                'from Manipal Academy of Higher Education in the year 2000. After working for one year as ',
                                'senior resident in ENT in Visakhapatnam he moved to UK for further training. Dr Raju ',
                                'obtained MRCS degree from Royal College of Physicians and Surgeons of Glasgow and ', 
                                'DOHNS degree from Royal College of Surgeons of England in the year 2005. He became a ',
                                'Fellow of The European Board of Oto-rhino-Laryngologists in the year 2013. He worked as ',
                                'a Registrar and Specialty Doctor at Warwick Hospital, East Surrey Hospital, Chase Farm and ',
                                'Barnet Hospitals between 2002-2014. He is currently working as a Senior ENT Consultant ',
                                'at SUSRUTA SUPER SPECIALTY E.N.T, HEAD & NECK SURGERY HOSPITAL in Health city ',
                                'visakhaptnam.'
                        ]
                    },
                    "doctorCredentialTwo": {
                        title: 'Services',
                        descp: ['Reconstructive Middle Ear Surgery', 
                                'Septorhinoplasty',
                                'Endoscopic Skull Base Surgery',
                                'Micro Laryngeal Surgery',
                                'Head And Neck Cancer Surgery', 
                                'Thyroid Surgery',
                                'Surgery for Snoring',
                                'Phonosurgery'
                        ]
                    },
                    "doctorCredentialThree": {
                        title: 'Specializations',
                        descp: ['ENT Otolaryngologist']
                    },
                    "doctorCredentialFour": {
                        title:  'Education',
                        descp: ['MBBS - JJM Medical College, 1996',
                                'MS - ENT - Kasturba Medical College, Manipal, 2000',
                                'Membership of the Royal College of Surgeons (MRCS) - Royal College Of Surgeons And Physicians Of Glasgow, 2005'
                        ]            
                    },
                    "doctorCredentialFive": {
                        title:  'Experience',
                        descp: ['1997 - 2000 Resident ENT Surgeon (M.S) at Manipal Academy of Higher Education (MAHE) University',
                                '2001 - 2005 Senior Resident ENT Surgeon at Warwick General and East Surrey Hospital, London',
                                '2006 - 2008 Registrar at Chase Farm Hospital, Enfield, London'
                        ]
                    },
                    "doctorCredentialSix": {
                        title:  'Awards and Recognitions',
                        descp: ['Best Outgoing Post Graduate student - 2000 Batch - 2000',
                                'Gold Medal for poster Presentation Evolution of Otology - South Zone ENT Conference, 1999 - 1999'
                        ]
                    },
                    "doctorCredentialSeven": {
                        title:  'Memberships',
                        descp: ['Association of Otolaryngologists of India (AOI)',
                                'Indian Society of Otology',
                                'British Medical Association, UK'
                        ]
                    },
                    
                    
                } 

            }, 100);
        }
        
        // Doctor Details
        function getDoctorFields() { return $timeout(doctorFields, 1500); }
        function doctorFields() {
            return [
                
                {   type: 'input', key: 'doctorName',
                    templateOptions: { label: 'Doctor Name' }
                },

                {   type: "textarea", key: "doctorCredentialOne.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Intro",
                        "rows": 8,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialTwo.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Services",
                        "rows": 5,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialThree.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Specializations",
                        "rows": 5,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialFour.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Education",
                        "rows": 4,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialFive.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Experience",
                        "rows": 4,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialSix.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Awards and Recognitions",
                        "rows": 4,
                        "cols": 15
                    }
                },
                
                {   type: "textarea", key: "doctorCredentialSeven.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Memberships",
                        "rows": 4,
                        "cols": 15
                    }
                },
               
                {   type: "textarea", key: "doctorCredentialEight.descp",
                    "templateOptions": {
                        "placeholder": "I like puppies",
                        "label": "Registrations",
                        "rows": 4,
                        "cols": 15
                    }
                }
                
            ]
        }


    });

})();



/*
return {
                    
                    id: 1, username: 'Jane', email: 'jane@doe.com', password: 'a', 
                    
                    doctorName: 'Dr. Ramesh',

                    "phoneVerified": true,
                    
                    "doctorCredentialOne": {
                        "title": "Intro",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialTwo": {
                        "title": "Services",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialThree": {
                        "title": "Specializations",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialFour": {
                        "title": "Education",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialFive": {
                        "title": "Awards and Recognitions",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialSix": {
                        "title": "Memberships",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
                    "doctorCredentialSeven": {
                        "title": "Registrations",
                        "descp": [ "Sample Text no 1.", "Sample Text no 2." ]
                    },
    
                } 

*/