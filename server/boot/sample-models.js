var fake = require('./fake-data.js');

module.exports = function(app) {

    var ds = app.datasources.db;

    var ACL = app.models.ACL;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Admin = app.models.Admin;
    var AccessToken = app.models.AccessToken;

    // var Setting = app.models.Setting;
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

    // ds.autoupdate('Setting');
    ds.autoupdate('Patient');
    ds.autoupdate('Appointment');
    ds.autoupdate('Practice');
    // ds.autoupdate('Doctor');
    ds.autoupdate('Hospital');

    // user with admin access
    // sample: {"email": "adi@doe.com", "password": "a"}
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


    ds.automigrate('Doctor', function(err) {
        if (err) throw err
        
        var samDoctors = fake.SampleDoctors(8);
        var samHospitals = fake.SampleHospitals(4);
        var samPractices = fake.SamplePractices(10);
        var samPatients = fake.SamplePatients(16);
        var samAppointments = fake.SampleAppointments(18);

        // create doctors
        Doctor.create(samDoctors, function(err, doctors){
            if (err) return console.error(err);
            console.log('Doctors created: ', doctors);
            
            // create hospitals
            Hospital.create(samHospitals, function(err, hospitals){
                if (err) return console.error(err);
                console.log('Hospitals created: ', hospitals);

                // mapping hospitals and doctors to create practices
                var mat = [
                    [0, 0], [0, 1],
                    [1, 1], [1, 2], [1, 3], 
                    [2, 4], [2, 5], [2, 6], [2, 7], 
                    [3, 7]
                ];
                for (var p in mat) {
                    var h = mat[p][0];
                    var d = mat[p][1]; 
                    //console.log(hospitals[h].id, doctors[d].id);
                    samPractices[p].hospitalId = hospitals[h].id;
                    samPractices[p].doctorId = doctors[d].id; 
                }
                // create practices
                Practice.create(samPractices, function(err, practices){
                    if (err) return console.error(err);
                    console.log('Practices created: ', practices);
                    // doctor + hospital = practice
                    // first stage is completed


                    // create patients
                    Patient.create(samPatients, function(err, patients){
                        if (err) return console.error(err);
                        console.log('Patients created: ', patients);

                        // mapping practices and patients to create appointments
                        var mat = [
                            [0,  0], [0,  1],
                            [1,  1], [1,  2], 
                            [2,  3], [2,  4], 
                            [3,  5], [3,  6], 
                            [4,  7], [4,  8],
                            [5,  9], [5, 10],
                            [6, 11], [6, 12],
                            [7, 13], [7, 14],
                            [8, 15],
                            [9, 15]
                        ];
                        for (var ap in mat) {
                            var pr = mat[ap][0];
                            var pa = mat[ap][1];
                            //console.log(practices[pr].id, patients[pa].id);
                            samAppointments[ap].practiceId = practices[pr].id;
                            samAppointments[ap].patientId = patients[pa].id; 
                        }
                        // create patients
                        Appointment.create(samAppointments, function(err, appointments){
                            if (err) return console.error(err);
                            console.log('Appointments created: ', appointments);
                        });

                    }); // end create patients

                }); // end create practices

            }); // end create hospitals

        }); // end create doctors

    });  // end automigrate

}; // end
