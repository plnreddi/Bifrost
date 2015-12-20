module.exports = function(app) {
  var Clinic = app.models.Clinic;
  var Appointment = app.models.Appointment;

  Appointment.create([{
    "start": "December 17, 2015 03:25:00",
    "end": "December 17, 2015 03:40:00",
    "patientName": "test",
    "type": "normal",
    "doctorId": 1,
    "patientId": 3
  }, {
    "start": "December 16, 2015 03:15:00",
    "end": "December 16, 2015 03:30:00",
    "patientName": "rest",
    "type": "normal",
    "doctorId": 1,
    "patientId": 1
  }, {
    "start": "December 12, 2015 13:15:00",
    "end": "December 12, 2015 13:30:00",
    "patientName": "rest",
    "type": "normal",
    "doctorId": 1,
    "patientId": 1
  },{
    "start": "December 14, 2015 03:15:00",
    "end": "December 14, 2015 03:30:00",
    "title": "knmnj",
    "type": "block",
    "doctorId": 1
  }, {
    "start": "December 19, 2015 03:25:00",
    "end": "December 17, 2015 03:40:00",
    "patientName": "wvqecwt",
    "type": "normal",
    "doctorId": 2,
    "patientId": 2
  }, {
    "start": "December 16, 2015 02:15:00",
    "end": "December 16, 2015 02:30:00",
    "patientName": "vgvwrv",
    "type": "normal",
    "doctorId": 2,
    "patientId": 1
  }], function(err, appointments) {
    if (err) throw err;
  });

  Clinic.create([{
    name: 'Parthas clinic'
  }], function(err, clinics) {
    if (err) throw err;
    console.log('Created clinic:', clinics);
    clinics[0].doctors.create([{
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
    }], function(err, users) {
      if (err) throw err;

      console.log('Created Doctor:', users);
      users[0].patients.create([{
        username: 'crrx',
        email: 'crrx@doe.com',
        password: 'a'
      }, {
        username: 'dxwex',
        email: 'dxwex@doe.com',
        password: 'a'
      }, {
        username: 'xe3xe',
        email: 'xe3xe@projects.com',
        password: 'a'
      }], function(err, users) {
        if (err) throw err;

        console.log('Created Patient:', users);
      });

    });

  });
};
