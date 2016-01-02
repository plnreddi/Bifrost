module.exports = function(app) {
  var ds = app.datasources.db;
  var Setting = app.models.Setting;
  var ACL = app.models.ACL;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var User = app.models.User;
  var AccessToken = app.models.AccessToken;
  var Appointment = app.models.Appointment;
  var Patient = app.models.Patient;
  var Doctor = app.models.Doctor;
  var Clinic = app.models.Clinic;

  ds.autoupdate('ACL');
  ds.autoupdate('Role');
  ds.autoupdate('RoleMapping');
  ds.autoupdate('User');
  ds.autoupdate('AccessToken');
  ds.autoupdate('Setting');
  ds.autoupdate('Appointment');
  ds.autoupdate('Patient');
  ds.autoupdate('Clinic');
  ds.autoupdate('Doctor');

  Setting.create([{
    key: 'buisinessHoursStart',
    value: '10:00',
  }, {
    key: 'buisinessHoursEnd',
    value: '18:00',
  }, {
    key: 'buisinessHoursDOW',
    value: '1,2,3,4,5',
  }], function(err, settings) {
    if (err) throw err;
    console.log('Created settings:', settings);
  });

  Clinic.create([{
    name: 'Parthas clinic'
  }], function(err, clinics) {
    if (err) throw err;
    console.log('Created clinic:', clinics);
    Doctor.create([{
      username: 'John',
      email: 'john@doe.com',
      password: 'a',
      clinicId: clinics[0].id
    }, {
      username: 'Jane',
      email: 'jane@doe.com',
      password: 'a',
      clinicId: clinics[0].id
    }, {
      username: 'Bob',
      email: 'bob@projects.com',
      password: 'a',
      clinicId: clinics[0].id
    }], function(err, doctors) {
      if (err) throw err;

      console.log('Created Doctor:', doctors);
      Patient.create([{
        username: 'crrx',
        email: 'crrx@doe.com',
        password: 'a',
        doctorId: doctors[0].id
      }, {
        username: 'dxwex',
        email: 'dxwex@doe.com',
        password: 'a',
        doctorId: doctors[0].id
      }, {
        username: 'xe3xe',
        email: 'xe3xe@projects.com',
        password: 'a',
        doctorId: doctors[0].id
      }], function(err, patients) {
        if (err) throw err;

        console.log('Created Patient:', patients);
        Appointment.create([{
          "startTime": "December 17, 2015 03:25:00",
          "endTime": "December 17, 2015 03:40:00",
          "patientName": "test",
          "appointmentType": "normal",
          "doctorId": doctors[0].id,
          "patientId": patients[0].id
        }, {
          "startTime": "December 16, 2015 03:15:00",
          "endTime": "December 16, 2015 03:30:00",
          "patientName": "rest",
          "appointmentType": "normal",
          "doctorId": doctors[1].id,
          "patientId": patients[1].id
        }, {
          "startTime": "December 12, 2015 13:15:00",
          "endTime": "December 12, 2015 13:30:00",
          "patientName": "rest",
          "appointmentType": "normal",
          "doctorId": doctors[2].id,
          "patientId": patients[2].id
        }, {
          "startTime": "December 14, 2015 03:15:00",
          "endTime": "December 14, 2015 03:30:00",
          "title": "knmnj",
          "appointmentType": "block",
          "doctorId": doctors[1].id,
        }, {
          "startTime": "December 19, 2015 03:25:00",
          "endTime": "December 17, 2015 03:40:00",
          "patientName": "wvqecwt",
          "appointmentType": "normal",
          "doctorId": doctors[1].id,
          "patientId": patients[0].id
        }, {
          "startTime": "December 16, 2015 02:15:00",
          "endTime": "December 16, 2015 02:30:00",
          "patientName": "vgvwrv",
          "appointmentType": "normal",
          "doctorId": doctors[2].id,
          "patientId": patients[1].id
        }], function(err, appointments) {
          if (err) throw err;
          console.log('Created Patient:', appointments);
        });
      });

    });

  });
};
