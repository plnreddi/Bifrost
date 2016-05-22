
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

        patientName: { type: 'string', faker: 'name.findName' },
        //dateofBirth: { type: "string", faker: "custom.dateofBirth" },
        age: { type: "string", faker: "custom.personAge" },
        gender: { type: "string", enum: ["Male", "Female"] },
        aadhaarId: { type: "string", faker: "custom.aadhaarId" },
        phoneNumber: { type: "string", faker: "custom.mobNumberIndia" },
        bloodGroup: { type: "string", enum: ['O+','O-','A+','A-','B+','B-','AB+','AB-'] },
        
        //email: { type: 'string', format: 'email', faker: 'internet.email'},
        
        patientAddress: { type: 'object',
            properties: {
                street: { type: 'string', faker: 'address.streetAddress' },
                city: { type: 'string', faker: 'address.city' },
                state: { type: 'string', faker: 'address.state' },
                zipCode: { type: 'string', faker: 'custom.pinCodeIndia' }
                //zipCode: { type: 'string', faker: 'address.zipCode' }
            },
            required: ['street', 'city', 'state', 'zipCode']
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
        'patientName', 'dateofBirth', 'age', 'gender', 'aadhaarId', 'phoneNumber', 'bloodGroup',
        'email', 'patientAddress', 'patientVitals', 'medicalHistory',     
    ]

}; // end of patientSchema



// Doctor fake data
var doctorSchema = { type: 'object',

    properties: {
        
        username: 'John', 
        email: 'john@doe.com', 
        password: 'a',

        doctorName: { type: 'string', faker: 'name.findName' },
        doctorPhoto: { type: 'string', faker: 'image.avatar' },
        
        doctorCredentialOne: { "type": "object",
            "properties": {
                title: "Intro",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.paragraph'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialTwo: { "type": "object",
            "properties": {
                title: "Services",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.lines'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialThree: { "type": "object",
            "properties": {
                title: "Specializations",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.sentence'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialFour: { "type": "object",
            "properties": {
                title: "Education",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.lines'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialFive: { "type": "object",
            "properties": {
                title: "Awards and Recognitions",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.lines'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialSix: { "type": "object",
            "properties": {
                title: "Memberships",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.lines'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },

        doctorCredentialSeven: { "type": "object",
            "properties": {
                title: "Registrations",
                descp: { type: "array",
                    items:  { type: 'string', faker: 'lorem.lines'},
                    minItems: 2, maxItems: 3
                },
            },
            required: ['title', 'descp']
        },
        
               
    },
    required: [
        'username', 'email', 'password', 'doctorName', 'doctorPhoto',
        'doctorCredentialOne','doctorCredentialTwo','doctorCredentialThree','doctorCredentialFour',
        'doctorCredentialFive','doctorCredentialSix','doctorCredentialSeven'
    ]

}; // end of doctorSchema



// Doctor fake data (OLD)
/*
var doctorSchema = { type: 'object',

    properties: {
        
        username: 'John', 
        email: 'john@doe.com', 
        password: 'a',

        doctorName: { type: 'string', faker: 'name.findName' },
        
        aboutDoctor:{ "type": "array",
            "items": [

                {   "type": "object",
                    "properties": {
                        key: "Intro",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.paragraph'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Services",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.lines'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Specializations",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.sentence'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Education",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.lines'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Awards and Recognitions",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.lines'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Memberships",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.lines'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },

                {   "type": "object",
                    "properties": {
                        key: "Registrations",
                        value: { type: "array",
                            items:  { type: 'string', faker: 'lorem.lines'},
                            minItems: 2, maxItems: 3
                        },
                    },
                    required: ['key', 'value']
                },
            ]
        }

    },
    required: [
       'username', 'email', 'password', 'doctorName', 'aboutDoctor'
    ]

}; 
*/


// hospital fake data
var hospitalSchema = { type: 'object',

    properties: {
        hospitalName: { type: 'string', faker: 'company.companyName' },  
    
        hospitalAddress: { type: 'object',
            properties: {
                street: { type: 'string', faker: 'address.streetAddress' },
                city: { type: 'string', faker: 'address.city' },
                state: { type: 'string', faker: 'address.state' },
                zipCode: { type: 'string', faker: 'custom.pinCodeIndia' }
            },
            required: ['street', 'city', 'state', 'zipCode']
        },

    },
    required: [
        'hospitalName', 'hospitalAddress'
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






/*
var fakePatients = [];
for (i = 0; i < 3; i++) {
    fakePatients[i] = jsf(patientSchema);
}

for (i = 0; i < 3; i++) {
    console.log(fakePatients[i].patient);
}


var fakeDoctors = [];
for (i = 0; i < 3; i++) {
    fakeDoctors[i] = jsf(doctorSchema);
}

for (i = 0; i < 3; i++) {
    console.log(fakeDoctors[i].doctor);
}


var fakeHospitals = [];
for (i = 0; i < 3; i++) {
    fakeHospitals[i] = jsf(hospitalSchema);
}

for (i = 0; i < 3; i++) {
    console.log(fakeHospitals[i].hospital);
}

var fakePractice = [];
for (i = 0; i < 3; i++) {
    fakePractice[i] = jsf(practiceSchema);
}

for (i = 0; i < 3; i++) {
    console.log(fakePractice[i].practice);
}
*/


/*

// Doctor fake data
var doctorSchema = { type: 'object',

    properties: {
        doctor: { type: 'object',

            properties: {
                
                username: 'John', 
                email: 'john@doe.com', 
                password: 'a',

                doctorName: { type: 'string', faker: 'name.findName' },
                
                aboutDoctor:{ "type": "array",
                    "items": [
                        {   "type": "object",
                            "properties": {
                                key: "Intro",
                                value: { type: 'string', faker: 'lorem.paragraph' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Services",
                                value: { type: 'string', faker: 'lorem.lines' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Specializations",
                                value: { type: 'string', faker: 'lorem.sentence' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Education",
                                value: { type: 'string', faker: 'lorem.lines' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Awards and Recognitions",
                                value: { type: 'string', faker: 'lorem.lines' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Memberships",
                                value: { type: 'string', faker: 'lorem.lines' },
                            },
                            required: ['key', 'value']
                        },

                        {   "type": "object",
                            "properties": {
                                key: "Registrations",
                                value: { type: 'string', faker: 'lorem.lines' },
                            },
                            required: ['key', 'value']
                        }
                    ]
                }

            },
            required: [
               'username', 'email', 'password', 'doctorName', 'aboutDoctor'
            ]
         
        }
    },

    required: ['doctor']

}; // end of doctorSchema



*/


