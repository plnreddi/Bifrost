

module.exports = function(app) {

    var ds = app.datasources.db;

    var ACL = app.models.ACL;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Admin = app.models.Admin;
    var AccessToken = app.models.AccessToken;

 //   var Setting = app.models.Setting;
    var Patient = app.models.Patient;
    var Appointment = app.models.Appointment;
    var Practice = app.models.Practice;
    var Doctor = app.models.Doctor;
    var Hospital = app.models.Hospital;

    ds.autoupdate('ACL');
    ds.autoupdate('Role');
    ds.autoupdate('RoleMapping');
    ds.autoupdate('User');
    ds.autoupdate('AccessToken');

//    ds.autoupdate('Setting');
    ds.autoupdate('Patient');
    ds.autoupdate('Appointment');
    ds.autoupdate('Practice');
    // ds.autoupdate('Doctor');
    ds.autoupdate('Hospital');


    // user with admin access
    var developers = [
        {username: 'pln', email: 'pln@doe.com', password: 'a'},
        {username: 'adi', email: 'adi@doe.com', password: 'a'}
    ];
    Admin.create(developers, function(err, users) {
        if (err) throw err;
        console.log('Created users:', users);
        //create the admin role
        Role.create({ name: 'admin' }, function(err, role) {
            if (err) throw err;
            console.log('Created role:', role);
            //make adi an admin
            role.principals.create({principalType: RoleMapping.USER, principalId: users[1].id}, function(err, principal) {
                if (err) throw err;
                console.log('Created principal:', principal);
            });
        });
    });


    // settings
    /*
    var vptSettings = SampleSettings();
    Setting.create(vptSettings, function(err, settings) {
        if (err) throw err;
        console.log('Settings created:', settings);
    });
*/

    var doctor;
    var practice;

    ds.automigrate('Doctor', function(err) {
        if (err) throw err

        var vptPatients = SamplePatients();
        var vptDoctors = SampleDoctors();
        var vptHospitals = SampleHospitals();
     
        // create doctors
        Doctor.create(vptDoctors, function(err, doctors){
            if (err) return console.error(err);
            console.log('Doctors created: ', doctors);
            doctor = doctors[0];

            // create hospital for doctor and call it as practice
            doctor.hospitals.create(vptHospitals[0], function(err, hospital){
                if (err) return console.error(err);
                console.log('Doctor + Hospital created: ', hospital);

                // practice is updated with practice name
                Practice.updateAll({hospitalId: hospital.id}, { practiceName: 'Cancer Awareness'}, function(err, info){
                    if (err) return console.error(err);
                    console.log('Practice Update: ', info);

                    // find practice with hospital id
                    Practice.find({where: {hospitalId: hospital.id}}, function(err, practices) {
                        if (err) return console.error(err);
                        console.log('Find Practices: ', practices);
                        practice = practices[0];

                        // create patients for practice and call it as appointment
                        practice.patients.create(vptPatients[0], function(err, patient){
                            if (err) return console.error(err);
                            console.log('Practice Patient: ', patient);
                        });
                    });
                });
            });
        });
    });
/*

    function SampleSettings() {
        return [
            { key: 'buisinessHoursStart', value: '10:00' },
            { key: 'buisinessHoursEnd', value: '18:00' },
            { key: 'buisinessHoursDOW',value: '1,2,3,4,5' }
        ];
    } // end of SampleSettings
*/

    function SamplePatients() {
        return [
          {
            username: 'Ramana', email: 'ramana@doe.com', password: 'a',
            patientName:'Ramana',
            dateofBirth:'1990-08-20',
            age: 31,
            gender: 'Male',
            aadhaarId: '123456789',
            phoneNumber:'9898989898',
            bloodGroup: 'O+',

            patientAddress: {
              street:'Flat 101, Appolo Apts, MVP Colony',
              city:'Visakhapatnam',
              state:'AP',
              zipCode:'530003'
            },

            emailList: [{label:'home', address:'ramana123@gmail.com'}],

            patientVitals: [{
              height: '60',
              weight: '150',
              bp: '120/80',
              temp: '98',
              pulse: '70',
              rr: '14',
              o2sat: '50',
              pain: 'nopain'
            }],

            medicalHistory: [
              { label: "Hypertension", value: false },
              { label: "Diabetes", value: true },
              { label: "Asthma", value: false },
              { label: "Epilepsy", value: true },
              { label: "Heart Disease", value: true },
              { label: "Allergies", value: true },
              { label: "Gastric Ulcers", value: true },
              { label: "Pregnant/Breast Feeding", value: true },
              { label: "Undergone Dental Treatment Earlier", value: true },
              { label: "Low Blood Pressure", value: true },
              { label: "Anemic", value: true },
              { label: "Hepatitis A B/C/D/E", value: true },
              { label: "AIDS HIV positive", value: true }
            ]

          },  // end of patient Ramana

          {
            username: 'Krishna', email: 'krishna@doe.com', password: 'a',
            name:'Krishna',
            age: 29,
            gender: 'Male',
            aadhaarId: '144456789',
            phoneNumber:'9898989898',
            bloodGroup: 'A+',

            patientAddress: {
              street:'Flat 201, Appolo Apts, MVP Colony',
              city:'Visakhapatnam',
              state:'AP',
              zipCode:'530003'
            },

            emailList: [{label:'home', address:'krishna123@gmail.com'}]

          } // end of patient Krishna

        ];
    } // end of SamplePatients


    function SampleDoctors() {
        return [

          { username: 'John', email: 'john@doe.com', password: 'a',

            doctorName: 'Dr. Ramesh',

            aboutDoctor: [
              { key:'Intro',
                value: ['Dr Krishnam Raju did MB BS from JJM Medical College, Davangere in 1996. He completed ', 
                        'Post graduate training (Master of Surgery in Otolaryngology and Head and Neck Surgery) ',
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
              { key:'Services',
                value: ['Reconstructive Middle Ear Surgery', 
                        'Septorhinoplasty',
                        'Endoscopic Skull Base Surgery',
                        'Micro Laryngeal Surgery',
                        'Head And Neck Cancer Surgery', 
                        'Thyroid Surgery',
                        'Surgery for Snoring',
                        'Phonosurgery'
                       ]
              },
              { key:'Specializations',
                value: ['ENT Otolaryngologist']
              },
              { key:'Education',
                value: ['MBBS - JJM Medical College, 1996',
                        'MS - ENT - Kasturba Medical College, Manipal, 2000',
                        'Membership of the Royal College of Surgeons (MRCS) - Royal College Of Surgeons And Physicians Of Glasgow, 2005'
                       ]
              },
              { key:'Experience',
                value: ['1997 - 2000 Resident ENT Surgeon (M.S) at Manipal Academy of Higher Education (MAHE) University',
                        '2001 - 2005 Senior Resident ENT Surgeon at Warwick General and East Surrey Hospital, London',
                        '2006 - 2008 Registrar at Chase Farm Hospital, Enfield, London'
                       ]
              },
              { key:'Awards and Recognitions',
                value: ['Best Outgoing Post Graduate student - 2000 Batch - 2000',
                        'Gold Medal for poster Presentation Evolution of Otology - South Zone ENT Conference, 1999 - 1999'
                       ]
              },
              { key:'Memberships',
                value: ['Association of Otolaryngologists of India (AOI)',
                        'Indian Society of Otology',
                        'British Medical Association, UK'
                       ]
              },
              { key:'Registrations',
                value: ['37571 Andhra Pradesh Medical Council, 1996']
              }

            ]
          },

          { username: 'Jane', email: 'jane@doe.com', password: 'a',
            doctorName: 'Dr.Kishan'
          }
        ];

    } // end of SampleDoctors


    function SampleHospitals() {
        return [
            { hospitalName: 'Golden Jubilee',

              hospitalAddress: {
                street:'Kailsa Puram, near Port Stadium',
                city:'Visakhapatnam',
                state:'AP',
                zipCode:'530033'
              }
            },

            { hospitalName: 'City Hospital',

              hospitalAddress: {
                street:'Old Post office',
                city:'Visakhapatnam',
                state:'AP',
                zipCode:'530043'
              }
            }
        ];
    } // end of SampleHospitals


}; // end



/*

 {"email": "john@doe.com", "password": "a"} 
 {"email": "ramana@doe.com", "password": "a"}
 {"email": "adi@doe.com", "password": "a"}

 
    var vptPatients = [
        { username: 'Ramana', email: 'ramana@doe.com', password: 'a' },
        { username: 'Krishna', email: 'krishna@doe.com', password: 'a' },
        { username: 'Vemana', email: 'vemana@projects.com', password: 'a' }
    ];

    var vptDoctors = [
        { username: 'John', email: 'john@doe.com', password: 'a' },
        { username: 'Jane', email: 'jane@doe.com', password: 'a' },
        { username: 'Bob', email: 'bob@projects.com', password: 'a' }
    ];

    var vptHospitals = [
        { hospitalName: 'Golden Jubilee' },
        { hospitalName: 'City Hospital' }
    ];
*/

