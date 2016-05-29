
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
                    "phoneVerified": true,
                    
                    uid: "abcd1234",
                                        
                    profile: {
                        name: 'Dr. Ramesh',
                        title: "MD",
                        imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/geshan/128.jpg',
                        gender: "Male",
                        languages: [
                            { "name":"English", "code":"en" },
                            { "name":"Telugu", "code":"te_IN" }
                        ],
                        bio: [  
                            'Dr Ramesh Raju did MB BS from JJM Medical College, Davangere in 1996. He completed' + 
                            'Post graduate training (Master of Surgery in Otolaryngology and Head and Neck Surgery) ' +
                            'from Manipal Academy of Higher Education in the year 2000. After working for one year as ' +
                            'senior resident in ENT in Visakhapatnam he moved to UK for further training. ',
                            
                            'Dr Raju obtained MRCS degree from Royal College of Physicians and Surgeons of Glasgow and ' +
                            'DOHNS degree from Royal College of Surgeons of England in the year 2005. He became a ' +
                            'Fellow of The European Board of Oto-rhino-Laryngologists in the year 2013. He worked as ' +
                            'a Registrar and Specialty Doctor at Warwick Hospital, East Surrey Hospital, Chase Farm and ' +
                            'Barnet Hospitals between 2002-2014. He is currently working as a Senior ENT Consultant ' +
                            'at SUSRUTA SUPER SPECIALTY E.N.T, HEAD & NECK SURGERY HOSPITAL in Health city ',
                            'visakhaptnam.'
                        ] 
                    },
                    
                    specialties: [  
                        {  
                            uid: "general-surgeon",
                            name: "Surgery",
                            description: "Specializes in complex surgical operations.",
                            category: "medical",
                            actor: "General Surgeon"
                        },
                        {  
                            uid: "vascular-surgeon",
                            name: "Vascular Surgery",
                            description: "Specializes in blood vessel surgery excluding the heart.",
                            category: "medical",
                            actor: "Vascular Surgeon"
                        }
                    ],
                    
                    education: [  
                        {  
                            school: "Georgetown University Hospital",
                            year: null,
                            degree: "Internship"
                        },
                        {  
                            school: "Georgetown University Hospital",
                            year: null,
                            degree: "Residency"
                        },
                        {  
                            school: "California Pacific Medical Center",
                            year: null,
                            degree: "Residency"
                        }
                    ],
                    
                    registrations: [  
                        {  
                            uid: "A9044",
                            body: 'Andhra Pradesh Medical Council',
                            year: "1990"
                        },
                        {  
                            uid: "A9040",
                            body: 'Andhra Pradesh Medical Council',
                            year: "1995"
                        },
                    ],

                    services: [  
                        {  
                            description: "Reconstructive Middle Ear Surgery",
                            url: null
                        },
                        {  
                            description: "Septorhinoplasty",
                            url: null
                        },
                        {  
                            description: "Endoscopic Skull Base Surgery",
                            url: null
                        },
                        {  
                            description: "Micro Laryngeal Surgery",
                            url: null
                        },
                        {  
                            description: "Head And Neck Cancer Surgery",
                            url: null
                        },
                        {  
                            description: "Thyroid Surgery",
                            url: null
                        },
                        {  
                            description: "Surgery for Snoring",
                            url: null
                        },
                        {  
                            description: "Phonosurgery",
                            url: null
                        },
                    ],

                    experience: [  
                        {  
                            period: "1997 - 2000",
                            description: 'Resident ENT Surgeon (M.S) at Manipal Academy of Higher Education (MAHE) University'
                        },
                        {  
                            period: "2001 - 2005",
                            description: 'Senior Resident ENT Surgeon at Warwick General and East Surrey Hospital, London'
                        },
                        {  
                            period: "2006 - 2008",
                            description: 'Registrar at Chase Farm Hospital, Enfield, London'
                        }
                    ],
                    
                    awards: [  
                        {  
                            description: 'Best Outgoing Post Graduate student',
                            year: "2000"
                        },
                        {  
                            description: 'Gold Medal for poster Presentation Evolution of Otology',
                            year: "1998"
                        },
                    ],
                    
                    memberships: [  
                        {  
                            description: 'Association of Otolaryngologists of India (AOI)'
                        },
                        {  
                            description: 'Indian Society of Otology'
                        },
                    ]
          
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
