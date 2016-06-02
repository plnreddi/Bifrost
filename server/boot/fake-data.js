
var jsf = require('json-schema-faker');
console.log('faker');
jsf.extend('faker', function(faker) {

    faker.locale = "en_IND"; // or any other language
      
    faker.custom = {

        dateofBirth: function(){
            var birth = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));
            return birth.getFullYear() + "-" + birth.getMonth() + "-" + birth.getDate();  
        },
        
        aadhaarId: function(){
            //return faker.finance.mask() + "-" + faker.finance.mask() + "-" + faker.finance.mask();
            return faker.random.number({min:1000, max:9999}) + "-" + faker.random.number({min:1000, max:9999}) + "-" + faker.random.number({min:1000, max:9999});
        },
        
        address: function(){
            return { street: faker.address.streetAddress(), city: faker.address.city() }
        },

        personHeight: function(){
            return faker.random.number({min:60, max:72}) + " in" 
        },

        personWeight: function(){
            return faker.random.number({min:100, max:200}) + " lb" 
        },
        personBP: function(){
            return faker.random.number({min:70, max:190}) + "/" + faker.random.number({min:40, max:100})
        },

        personTemp: function(){
            return (faker.random.number({min:950, max:1067}) * 0.1).toFixed(1) + " °F" 
        },

        personPulse: function(){
            return faker.random.number({min:60, max:100})
        },

        personRR: function(){
            return faker.random.number({min:12, max:18})
        },

        personO2sat: function(){  // not correct
            return faker.random.number({min:40, max:60})
        },

        personAge: function(){  
            return faker.random.number({min:20, max:60})
        },

        pinCodeIndia: function(){  
            return faker.random.number({min:100000, max:999999})
        },

        mobNumberIndia: function(){  
            return faker.random.number({min:9000000000, max:9999999999})
        }
    };

    return faker;
});


// Patient fake data
var patientSchema = { type: 'object',

    properties: {

        username: 'Ramana', 
        email: 'ramana@doe.com', 
        password: 'a',

        faceSheet: { "type": "object",
            "properties": {
                title: "Mr.",
                name: { type: 'string', faker: 'name.findName' },
                imageUrl: { type: 'string', faker: 'image.avatar' },
                
                phones: { type: "array",
                    items: { type: 'object',
                        properties: { 
                            number: { type: 'string', faker: "custom.mobNumberIndia" },
                            description: "Landline", 
                        },
                        required: ['number', 'description'] 
                    },
                    minItems: 1, maxItems: 2
                },
                
                emails: { type: "array",
                    items: { type: 'object',
                        properties: { 
                            address: { type: 'string', faker: 'internet.email' },
                            use: "Business"
                        },
                        required: ['address', 'use'] 
                    },
                    minItems: 1, maxItems: 2
                },
                preferredCommunication: { type: "string", 
                    enum: [ 
                        "Phone",
                        "Work",
                        "Cell",
                        "Snail Mail" ,
                        "Email", 
                        "Text Message", 
                        "Declined"
                    ] 
                },
                reminderLanguage: { "name":"English", "code":"en" }
            },
            required: ['title', 'name', 'imageUrl', 'phones', 'emails', 
                'reminderLanguage', 'preferredCommunication'
            ]
        },

        demographics: { "type": "object",
            "properties": {
                aadhaarNo: { type: "string", faker: "custom.aadhaarId" },
                birthDate: { type: "string", faker: "custom.dateofBirth" },
                gender: { type: "string", enum: ["Male", "Female"] },
                race: { type: "string", 
                    enum: [ 
                        "American Indian or Alaska Native",
                        "Asian",
                        "Black or African American",
                        "Native Hawaiian or Other Pacific Islander",
                        "White",
                        "Declined to specify"
                    ] 
                }, 
                ethnicity: { type: "string", 
                    enum: [ 
                        "Hispanic or",
                        "Not Hispanic or Latino",
                        "Declined to specify"
                    ] 
                }, 
                preferredLanguage: { "name":"English", "code":"en" },
                  
                address: { type: 'object',
                    properties: {
                        use: "Home",
                        street: { type: 'string', faker: 'address.streetAddress' },
                        city: { type: 'string', faker: 'address.city' },
                        state: { type: 'string', faker: 'address.state' },
                        zipCode: { type: 'string', faker: 'custom.pinCodeIndia' },
                        street2: 'street second line',
                        stateLong: 'Andhra Pradesh',
                        latlng: { "lat": 37.365759, "lng": -121.9233569 }
                    },
                    required: ['use', 'street', 'city', 'state', 'zipCode', 'street2', 'stateLong', 'latlng']
                },

                maritalStatus: { type: "string", 
                    enum: [ 
                        "Single",
                        "Married",
                        "Widowed",
                        "Divorce",
                        "Other"
                    ] 
                }
            },    
            required: ['aadhaarNo', 'birthDate', 'gender', 'race', 'ethnicity', 
                'preferredLanguage', 'address', 'maritalStatus'
            ]                       
        },
        
        patientVitals: { type: "array",

            items:  { type: 'object',
                properties: {
                    height: { type: "string", faker: "custom.personHeight" }, 
                    weight: { type: "string", faker: "custom.personWeight" }, 
                    bp: { type: "string", faker: "custom.personBP" }, 
                    temp: { type: "string", faker: "custom.personTemp" },
                    pulse: { type: "string", faker: "custom.personPulse" },
                    rr: { type: "string", faker: "custom.personRR" },
                    o2sat: { type: "string", faker: "custom.personO2sat" },
                    pain: { type: "string", enum: ["Pain", "NoPain"] }
                },
                required: ['height', 'weight', 'bp', 'temp', 'pulse', 'rr', 'o2sat', 'pain']
            }
        },

        medicalHistory: { type: "array",

            items: { type: 'object',
                properties: {
                    'Hypertension': { type: "boolean" },  
                    'Diabetes': { type: "boolean" },
                    'Asthma': { type: "boolean" },
                    'Epilepsy': { type: "boolean" },
                    'Heart Disease': { type: "boolean" },
                    'Allergies': { type: "boolean" },
                    'Gastric Ulcers': { type: "boolean" },
                    'Pregnant/Breast Feeding': { type: "boolean" },
                    'Undergone Dental Treatment Earlier': { type: "boolean" },
                    'Low Blood Pressure': { type: "boolean" },
                    'Anemic': { type: "boolean" },
                    'Hepatitis A B/C/D/E': { type: "boolean" },
                    'AIDS HIV positive': { type: "boolean" }
                },
                required: [
                    'Hypertension', 'Diabetes', 'Asthma', 'Epilepsy', 'Heart Disease', 'Allergies',
                    'Gastric Ulcers', 'Pregnant/Breast Feeding', 'Undergone Dental Treatment Earlier',
                    'Low Blood Pressure', 'Anemic', 'Hepatitis A B/C/D/E', 'AIDS HIV positive'
                ]
            }
        }

    },

    required: [
        'username', 'email', 'password',
        'faceSheet', 'demographics', 
        'patientVitals', 'medicalHistory'    
    ]

}; // end of patientSchema



// Doctor fake data
var doctorSchema = { type: 'object',

    properties: {
        
        username: 'John', 
        email: 'john@doe.com', 
        password: 'a',

        uid: "abcd1234",
        
        profile: { "type": "object",
            "properties": {
                name: { type: 'string', faker: 'name.findName' },
                title: "MD",
                imageUrl: { type: 'string', faker: 'image.avatar' },
                gender: "Male",
                languages: [
                    { "name":"English", "code":"en" },
                    { "name":"Telugu", "code":"te_IN" }
                ],
                bio: { type: "array",
                    items:  { type: 'string', faker: 'lorem.paragraph'},
                    minItems: 2, maxItems: 3
                }
            },
            required: ['name', 'title', 'imageUrl', 'gender', 'languages', 'bio']
        },
  
        specialties: { type: "array",
            items : { "type": "object",
                properties: {
                    uid: 'general-surgeon',
                    name: "Surgery",
                    description:"Specializes in complex surgical operations.",
                    category:"medical",
                    actor:"General Surgeon"
                },
                required: ['uid', 'name', 'description', 'category', 'actor']
            },
            minItems: 2,
        },

        education: { type: "array",
            items : { "type": "object",
                properties: {
                    school: "Georgetown University Hospital",
                    year: '1990',
                    degree: "Internship"
                },
                required: ['school', 'year', 'degree']
            },
            minItems: 3,
        },

        registrations: { type: "array",
            items : { "type": "object",
                properties: {
                    uid: "A9044",
                    body: 'Andhra Pradesh Medical Council',
                    year: "1990"
                },
                required: ['uid', 'body', 'year']
            },
            minItems: 2,
        },

        experience: { type: "array",
            items : { "type": "object",
                properties: {
                    period: "1986 - 2015",
                    description: 'consultant at Vision Optical Clinic'   
                },
                required: ['period', 'description']
            },
            minItems: 2,
        },

        services: { type: "array",
            items : { "type": "object",
                properties: {
                    description: 'Corneal Transplant',  
                    url: 'url for other doctors' 
                },
                required: ['url', 'description']
            },
            minItems: 7,
        },
        
        awards: { type: "array",
            items : { "type": "object",
                properties: {
                    description: 'Best perfomance in implantology handson',  
                    year: '1985' 
                },
                required: ['description', 'year']
            },
            minItems: 2,
        },
        
        memberships: { type: "array",
            items : { "type": "object",
                properties: {
                    description: 'Indian Society of Otology'
                },
                required: ['description']
            },
            minItems: 2,
        },
         
    },
    required: [
        'username', 'email', 'password', 'uid', 
        'profile', 'specialties', 'education', 'registrations', 'experience', 'services', 'awards', 'memberships'
    ]

}; // end of doctorSchema


// hospital fake data
var hospitalSchema = { type: 'object',

    properties: {
        
        uid: 'SUPER123',
        
        hospitalName: { type: 'string', faker: 'company.companyName' },
        
        hospitalType: { type: 'string', 
            enum: [ 'General',  'Super Specialty', 'Specific Service' ]
        },

        hospitalAddress: { type: 'object',
            properties: {
                street: { type: 'string', faker: 'address.streetAddress' },
                city: { type: 'string', faker: 'address.city' },
                state: { type: 'string', faker: 'address.state' },
                zipCode: { type: 'string', faker: 'custom.pinCodeIndia' },
                street2: 'street second line',
                stateLong: 'Andhra Pradesh',
                latlng: { "lat": 37.365759, "lng": -121.9233569 }
            },
            required: ['street', 'city', 'state', 'zipCode', 'street2', 'stateLong', 'latlng']
        },

        hospitalPhones: { type: "array",
            items : { "type": "object",
                properties: {
                    number: { type: "string", faker: "custom.mobNumberIndia" },
                    description: { type: 'string', enum: ['mobile', 'landline', 'fax'] },
                },
                required: ['number', 'description']
            },
            minItems: 1,
            maxItems: 2,
        }
 
    },
    required: [
        'uid', 'hospitalName', 'hospitalType', 'hospitalAddress', 'hospitalPhones'
    ]

}; // end of hospitalSchema



// Practice Schema for fake data
var practiceSchema = { type: 'object',

    properties: {
        practice: { type: 'object',
            properties: {
                practiceName: { type: 'string', 
                    enum: [ 'Dentist', 'Ophthalmologist', 'Dermotologist', 'Homeopath', 
                            'Ayurveda', 'Cardiologist', 'Gastroenterologist', 'Psychiatrist', 
                            'Ear-Nose-Throat', 'Gynecologist', 'Neurologist', 'Urologist'
                    ] 
                },  
                practiceTagline: { type: 'string', 
                    enum: [ 'A commitment to community.',
                            'A family of hospitals for your family.',
                            'A Great Place to Work. A Great Place to Receive Care.',
                            'A Legacy of Excellence.',
                            'A Passion for Better Medicine.',
                            'A Passion for Healing',
                            'A passion for putting patients first.',
                            'A personal relationship with medical excellence.',
                            'A Transforming, Healing Presence.',
                            'A True Devotion to Healing.',
                            'A Union of Compassion + Healthcare.',
                            'Achieving better health care one patient at a time.'
                    ]
                },  
                practiceSpecification: { type: 'string', faker: 'lorem.sentence' },  
                practiceWebsite: { type: 'string', faker: 'internet.url' } 
            },
            required: [
                'practiceName', 'practiceTagline', 'practiceSpecification', 'practiceWebsite'
            ]
        }
    },

    required: ['practice']  

}; // end of practiceSchema



// appointment fake data
var appointmentSchema = { type: 'object',

    properties: {
        appointment: { type: 'object',
            properties: {
                startTime: { type: 'string', faker: 'date.recent' },  
            },
            required: [
                'startTime'
            ]
        }
    },

    required: ['appointment']

}; // end of appointmentSchema



function SampleDoctors(count) {

    var fakeDoctors = [];

    for (i = 0; i < count; i++) {
        fakeDoctors[i] = jsf(doctorSchema);
    }

    return fakeDoctors;
}

function SampleHospitals(count) {

    var fakeHospitals = [];

    for (i = 0; i < count; i++) {
        fakeHospitals[i] = jsf(hospitalSchema);
    }

    return fakeHospitals;
}

function SamplePractices(count) {

    var fakePractices = [];

    for (i = 0; i < count; i++) {
        fakePractices[i] = jsf(practiceSchema);
    }

    return fakePractices;
}

function SamplePatients(count) {

    var fakePatients = [];

    for (i = 0; i < count; i++) {
        fakePatients[i] = jsf(patientSchema);
    }

    return fakePatients;
}

function SampleAppointments(count) {

    var fakeAppointments = [];

    for (i = 0; i < count; i++) {
        fakeAppointments[i] = jsf(appointmentSchema);
    }

    return fakeAppointments;
}

exports.SampleDoctors = SampleDoctors;
exports.SampleHospitals = SampleHospitals;
exports.SamplePractices = SamplePractices;
exports.SamplePatients = SamplePatients;
exports.SampleAppointments = SampleAppointments;


