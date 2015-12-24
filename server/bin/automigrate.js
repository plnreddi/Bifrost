var path = require('path');

var app = require(path.resolve(__dirname, '../server'));
var ds = app.datasources.db;
ds.automigrate('ACL');
ds.automigrate('Role');
ds.automigrate('RoleMapping');
ds.automigrate('User');
ds.automigrate('AccessToken');
ds.automigrate('Doctor', function(err) {
  if (err) throw err;

  var doctors = [{
    username: 'John',
    email: 'john@doe.com',
    password: 'a'
  }, {
    username: 'Jane',
    email: 'jane@doe.com',
    password: 'a'
  }, {
    username: 'Bob',
    email: 'bob@projects.com',
    password: 'a'
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

ds.automigrate('Appointment', function(err) {
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

ds.automigrate('Patient', function(err) {
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

ds.automigrate('Clinic', function(err) {
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
    });
  });
});
