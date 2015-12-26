module.exports = function(app) {
  var ds = app.datasources.db;
  ds.autoupdate('ACL');
  ds.autoupdate('Role');
  ds.autoupdate('RoleMapping');
  ds.autoupdate('User');
  ds.autoupdate('AccessToken');


  ds.autoupdate('Appointment', function(err) {
    if (err) throw err;

    var appointments = [{
      "startTime": "December 17, 2015 03:25:00",
      "endTime": "December 17, 2015 03:40:00",
      "patientName": "test",
      "appointmentType": "normal",
      "doctorId": 1,
      "patientId": 3
    }, {
      "startTime": "December 16, 2015 03:15:00",
      "endTime": "December 16, 2015 03:30:00",
      "patientName": "rest",
      "appointmentType": "normal",
      "doctorId": 1,
      "patientId": 1
    }, {
      "startTime": "December 12, 2015 13:15:00",
      "endTime": "December 12, 2015 13:30:00",
      "patientName": "rest",
      "appointmentType": "normal",
      "doctorId": 1,
      "patientId": 1
    }, {
      "startTime": "December 14, 2015 03:15:00",
      "endTime": "December 14, 2015 03:30:00",
      "title": "knmnj",
      "appointmentType": "block",
      "doctorId": 1
    }, {
      "startTime": "December 19, 2015 03:25:00",
      "endTime": "December 17, 2015 03:40:00",
      "patientName": "wvqecwt",
      "appointmentType": "normal",
      "doctorId": 2,
      "patientId": 2
    }, {
      "startTime": "December 16, 2015 02:15:00",
      "endTime": "December 16, 2015 02:30:00",
      "patientName": "vgvwrv",
      "appointmentType": "normal",
      "doctorId": 2,
      "patientId": 1
    }];
    var count = appointments.length;
    appointments.forEach(function(appointment) {
      app.models.Appointment.create(appointment, function(err, model) {
        if (err) throw err;
        console.log('Created:', model);
        count--;
        if (count === 0)
          ds.disconnect();
      });
    });
  });

  ds.autoupdate('Patient', function(err) {
    if (err) throw err;

    var patients = [{
      username: 'xzrex',
      email: 'xdcsx@doe.com',
      password: 'a'
    }, {
      username: 'xrexz',
      email: 'cdxsc@doe.com',
      password: 'a'
    }, {
      username: 'aqwea',
      email: 'srfadq@projects.com',
      password: 'a'
    }];
    var count = patients.length;
    patients.forEach(function(patient) {
      app.models.Patient.create(patient, function(err, model) {
        if (err) throw err;
        console.log('Created:', model);
        count--;
        if (count === 0)
          ds.disconnect();
      });
    });
  });

  ds.autoupdate('Clinic', function(err) {
    if (err) throw err;

    var clinics = [{
      name: 'Parthas clinic'
    }, {
      name: 'komkmmo clinic'
    }, {
      name: 'xexrez clinic'
    }];
    var count = clinics.length;
    clinics.forEach(function(clinic) {
      app.models.Clinic.create(clinic, function(err, model) {
        if (err) throw err;
        console.log('Created:', model);
        count--;
        if (count === 0)
          ds.disconnect();
        ds.autoupdate('Doctor', function(err) {
          if (err) throw err;

          var doctors = [{
            username: 'John',
            email: 'john@doe.com',
            password: 'a',
            clinicId: model.id
          }, {
            username: 'Jane',
            email: 'jane@doe.com',
            password: 'a',
            clinicId: model.id
          }, {
            username: 'Bob',
            email: 'bob@projects.com',
            password: 'a',
            clinicId: model.id
          }];
          var count = doctors.length;
          doctors.forEach(function(doctor) {
            app.models.Doctor.create(doctor, function(err, model) {
              if (err) throw err;
              console.log('Created:', model);
              count--;
              if (count === 0)
                ds.disconnect();
            });
          });
        });
      });
    });
  });
};
// module.exports = function(app) {
//   var Clinic = app.models.Clinic;
//   var Appointment = app.models.Appointment;

//   Appointment.create([{
//     "startTime": "December 17, 2015 03:25:00",
//     "endTime": "December 17, 2015 03:40:00",
//     "patientName": "test",
//     "appointmentType": "normal",
//     "doctorId": 1,
//     "patientId": 3
//   }, {
//     "startTime": "December 16, 2015 03:15:00",
//     "endTime": "December 16, 2015 03:30:00",
//     "patientName": "rest",
//     "appointmentType": "normal",
//     "doctorId": 1,
//     "patientId": 1
//   }, {
//     "startTime": "December 12, 2015 13:15:00",
//     "endTime": "December 12, 2015 13:30:00",
//     "patientName": "rest",
//     "appointmentType": "normal",
//     "doctorId": 1,
//     "patientId": 1
//   },{
//     "startTime": "December 14, 2015 03:15:00",
//     "endTime": "December 14, 2015 03:30:00",
//     "title": "knmnj",
//     "appointmentType": "block",
//     "doctorId": 1
//   }, {
//     "startTime": "December 19, 2015 03:25:00",
//     "endTime": "December 17, 2015 03:40:00",
//     "patientName": "wvqecwt",
//     "appointmentType": "normal",
//     "doctorId": 2,
//     "patientId": 2
//   }, {
//     "startTime": "December 16, 2015 02:15:00",
//     "endTime": "December 16, 2015 02:30:00",
//     "patientName": "vgvwrv",
//     "appointmentType": "normal",
//     "doctorId": 2,
//     "patientId": 1
//   }], function(err, appointments) {
//     if (err) throw err;
//   });

//   Clinic.create([{
//     name: 'Parthas clinic'
//   }], function(err, clinics) {
//     if (err) throw err;
//     console.log('Created clinic:', clinics);
//     clinics[0].doctors.create([{
//       username: 'John',
//       email: 'john@doe.com',
//       password: 'a'
//     }, {
//       username: 'Jane',
//       email: 'jane@doe.com',
//       password: 'a'
//     }, {
//       username: 'Bob',
//       email: 'bob@projects.com',
//       password: 'a'
//     }], function(err, users) {
//       if (err) throw err;

//       console.log('Created Doctor:', users);
//       users[0].patients.create([{
//         username: 'crrx',
//         email: 'crrx@doe.com',
//         password: 'a'
//       }, {
//         username: 'dxwex',
//         email: 'dxwex@doe.com',
//         password: 'a'
//       }, {
//         username: 'xe3xe',
//         email: 'xe3xe@projects.com',
//         password: 'a'
//       }], function(err, users) {
//         if (err) throw err;

//         console.log('Created Patient:', users);
//       });

//     });

//   });
// };
