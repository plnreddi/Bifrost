 
ds.automigrate('Doctor', function(err) {
    if (err) throw err
        
    async.waterfall(
        [
            _doctorCreate(),
            _hospitalCreate(),
            _mapDoctorHospitals(),
            _practiceCreate(),
            _patientCreate(),
            _mapPracticePatients(),
            _appointmentCreate()
        ],
        function (err, caption) {
            if (err) { alert('Something is wrong!'); }
            console.log(caption);
        }
    );
})
 
function _doctorCreate(callback) {
    var samDoctors = fake.SampleDoctors(8);    
    Doctor.create(samDoctors, function(err, doctors){
        if (err) callback(err); 
        
        console.log('Doctors created: ', doctors);
        callback(null, doctors);
    }); 
}
 
function _hospitalCreate(doctors, callback) {  
    var samHospitals = fake.SampleHospitals(4);  
    Hospital.create(samHospitals, function(err, hospitals){
        if (err) callback(err); 
        
        console.log('Hospitals created: ', hospitals);
        callback(null, doctors, hospitals);
    }); 
}
 
function _mapDoctorHospitals(doctors, hospitals, callback) {    
    var samPractices = fake.SamplePractices(10);
    
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
    callback(null, samPractices);
} 

function _practiceCreate(callback, samPractices) {  
    Practice.create(samPractices, function(err, practices){
        if (err) callback(err); 
        
        console.log('Practices created: ', practices);
        callback(null, practices);
    }); 
}
 
function _patientCreate(practices, callback) {
    var samPatients = fake.SamplePatients(16);    
    Patient.create(samPatients, function(err, patients){
        if (err) callback(err); 
        
        console.log('Patients created: ', patients);
        callback(null, practices, patients);
    }); 
} 
 
function _mapPracticePatients(practices, patients, callback) {    
    var samAppointments = fake.SampleAppointments(18);
    
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
    callback(null, samAppointments);
} 
 
function _appointmentCreate(samAppointments, callback) {  
    Appointment.create(samAppointments, function(err, appointments){
        if (err) callback(err); 
        
        console.log('Appointments created: ', appointments);
        callback(null);
    }); 
}
 
 
 
 
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
