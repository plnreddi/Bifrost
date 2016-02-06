'use strict';

var React = require('react-native');
var {
  AsyncStorage,
} = React;
var fetchFactory = require('fetch-factory').default;

var urlBase = "http://10.0.3.2:9000/api";
var authHeader = 'authorization';
var token = null;
AsyncStorage.getItem("apiToken").then(function(response) {
  token = response;
  console.log(token);
});

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

//var urlBaseHost = getHost(urlBase) || location.host;

var Doctor = fetchFactory.create({
  url: urlBase + "/Doctors/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "GET"
    },
    "prototype$__destroyById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "PUT"
    },
    "prototype$__findById__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "GET"
    },
    "prototype$__destroyById__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "PUT"
    },
    "prototype$__link__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "HEAD"
    },
    "prototype$__get__clinics": {
        url: urlBase + "/Doctors/:id/clinics",
        method: "GET"
    },
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "GET"
    },
    "prototype$__create__patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "POST"
    },
    "prototype$__delete__patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "DELETE"
    },
    "prototype$__count__patients": {
        url: urlBase + "/Doctors/:id/patients/count",
        method: "GET"
    },
    "prototype$__get__patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "GET"
    },
    "prototype$__create__patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "POST"
    },
    "prototype$__delete__patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "DELETE"
    },
    "prototype$__count__patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments/count",
        method: "GET"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Doctors",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Doctors",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Doctors",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Doctors/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Doctors/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Doctors",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Doctors/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Doctors/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Doctors/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Doctors/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Doctors/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Doctors/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Doctors/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Doctors/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Doctors/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Doctors/reset",
        method: "POST"
    },
    "::findById::Patient::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "GET"
    },
    "::destroyById::Patient::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "DELETE"
    },
    "::updateById::Patient::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "PUT"
    },
    "::findById::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "GET"
    },
    "::destroyById::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "DELETE"
    },
    "::updateById::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "PUT"
    },
    "::link::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "PUT"
    },
    "::unlink::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "DELETE"
    },
    "::exists::Patient::doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "HEAD"
    },
    "::get::Patient::doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "GET"
    },
    "::create::Patient::doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "POST"
    },
    "::createMany::Patient::doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "POST"
    },
    "::delete::Patient::doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "DELETE"
    },
    "::count::Patient::doctors": {
        url: urlBase + "/Patients/:id/doctors/count",
        method: "GET"
    },
    "::get::Patient::doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "GET"
    },
    "::create::Patient::doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "POST"
    },
    "::createMany::Patient::doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "POST"
    },
    "::delete::Patient::doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "DELETE"
    },
    "::count::Patient::doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment/count",
        method: "GET"
    },
    "::get::Appointment::doctor": {
        url: urlBase + "/Appointments/:id/doctor",
        method: "GET"
    },
    "::findById::Clinic::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "GET"
    },
    "::destroyById::Clinic::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "DELETE"
    },
    "::updateById::Clinic::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "PUT"
    },
    "::get::Clinic::doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "GET"
    },
    "::create::Clinic::doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "POST"
    },
    "::createMany::Clinic::doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "POST"
    },
    "::delete::Clinic::doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "DELETE"
    },
    "::count::Clinic::doctors": {
        url: urlBase + "/Clinics/:id/doctors/count",
        method: "GET"
    },
  });

var Patient = fetchFactory.create({
  url: urlBase + "/Patients/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "GET"
    },
    "prototype$__destroyById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctors/:fk",
        method: "PUT"
    },
    "prototype$__findById__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "GET"
    },
    "prototype$__destroyById__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
        method: "PUT"
    },
    "prototype$__link__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__doctorsAppointment": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
        method: "HEAD"
    },
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "GET"
    },
    "prototype$__create__doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "POST"
    },
    "prototype$__delete__doctors": {
        url: urlBase + "/Patients/:id/doctors",
        method: "DELETE"
    },
    "prototype$__count__doctors": {
        url: urlBase + "/Patients/:id/doctors/count",
        method: "GET"
    },
    "prototype$__get__doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "GET"
    },
    "prototype$__create__doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "POST"
    },
    "prototype$__delete__doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment",
        method: "DELETE"
    },
    "prototype$__count__doctorsAppointment": {
        url: urlBase + "/Patients/:id/doctorsAppointment/count",
        method: "GET"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Patients",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Patients",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Patients",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Patients/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Patients/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Patients",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Patients/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Patients/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Patients/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Patients/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Patients/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Patients/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Patients/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Patients/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Patients/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Patients/reset",
        method: "POST"
    },
    "::findById::Doctor::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "GET"
    },
    "::destroyById::Doctor::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "DELETE"
    },
    "::updateById::Doctor::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patients/:fk",
        method: "PUT"
    },
    "::findById::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "GET"
    },
    "::destroyById::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "DELETE"
    },
    "::updateById::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/:fk",
        method: "PUT"
    },
    "::link::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "PUT"
    },
    "::unlink::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "DELETE"
    },
    "::exists::Doctor::patientAppointments": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
        method: "HEAD"
    },
    "::get::Doctor::patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "GET"
    },
    "::create::Doctor::patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "POST"
    },
    "::createMany::Doctor::patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "POST"
    },
    "::delete::Doctor::patients": {
        url: urlBase + "/Doctors/:id/patients",
        method: "DELETE"
    },
    "::count::Doctor::patients": {
        url: urlBase + "/Doctors/:id/patients/count",
        method: "GET"
    },
    "::get::Doctor::patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "GET"
    },
    "::create::Doctor::patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "POST"
    },
    "::createMany::Doctor::patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "POST"
    },
    "::delete::Doctor::patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments",
        method: "DELETE"
    },
    "::count::Doctor::patientAppointments": {
        url: urlBase + "/Doctors/:id/patientAppointments/count",
        method: "GET"
    },
    "::get::Appointment::patient": {
        url: urlBase + "/Appointments/:id/patient",
        method: "GET"
    },
  });

var Receptionist = fetchFactory.create({
  url: urlBase + "/Receptionists/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Receptionists",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Receptionists",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Receptionists",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Receptionists/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Receptionists/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Receptionists",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Receptionists/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Receptionists/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Receptionists/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Receptionists/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Receptionists/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Receptionists/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Receptionists/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Receptionists/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Receptionists/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Receptionists/reset",
        method: "POST"
    },
  });

var Appointment = fetchFactory.create({
  url: urlBase + "/Appointments/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__get__doctor": {
        url: urlBase + "/Appointments/:id/doctor",
        method: "GET"
    },
    "prototype$__get__patient": {
        url: urlBase + "/Appointments/:id/patient",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Appointments",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Appointments",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Appointments",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Appointments/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Appointments/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Appointments",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Appointments/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Appointments/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Appointments/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Appointments/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Appointments/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Appointments/change-stream",
        method: "POST"
    },
  });

var Clinic = fetchFactory.create({
  url: urlBase + "/Clinics/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "GET"
    },
    "prototype$__destroyById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Clinics/:id/doctors/:fk",
        method: "PUT"
    },
    "prototype$__get__doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "GET"
    },
    "prototype$__create__doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "POST"
    },
    "prototype$__delete__doctors": {
        url: urlBase + "/Clinics/:id/doctors",
        method: "DELETE"
    },
    "prototype$__count__doctors": {
        url: urlBase + "/Clinics/:id/doctors/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Clinics",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Clinics",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Clinics",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Clinics/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Clinics/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Clinics",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Clinics/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Clinics/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Clinics/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Clinics/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Clinics/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Clinics/change-stream",
        method: "POST"
    },
    "::get::Doctor::clinics": {
        url: urlBase + "/Doctors/:id/clinics",
        method: "GET"
    },
  });

var Setting = fetchFactory.create({
  url: urlBase + "/settings/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "create": {
        url: urlBase + "/settings",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/settings",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/settings",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/settings/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/settings/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/settings",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/settings/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/settings/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/settings/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/settings/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/settings/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/settings/change-stream",
        method: "POST"
    },
  });


module.exports = {
  Doctor,
  Patient,
  Receptionist,
  Appointment,
  Clinic,
  Setting,
}
