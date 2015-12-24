(function(window, angular, undefined) {'use strict';

var urlBase = "api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Doctor
 * @header lbServices.Doctor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Doctor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Doctor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Doctors/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__findById__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__updateById__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patients.findById() instead.
        "prototype$__findById__patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patients.destroyById() instead.
        "prototype$__destroyById__patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patients.updateById() instead.
        "prototype$__updateById__patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.findById() instead.
        "prototype$__findById__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments.destroyById() instead.
        "prototype$__destroyById__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.updateById() instead.
        "prototype$__updateById__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.link() instead.
        "prototype$__link__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.unlink() instead.
        "prototype$__unlink__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.exists() instead.
        "prototype$__exists__patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Doctor.clinics() instead.
        "prototype$__get__clinics": {
          url: urlBase + "/Doctors/:id/clinics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__get__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Queries accessTokens of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Doctors/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__create__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Doctors/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__delete__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Doctors/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$__count__accessTokens
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Counts accessTokens of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Doctors/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patients() instead.
        "prototype$__get__patients": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patients",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patients.create() instead.
        "prototype$__create__patients": {
          url: urlBase + "/Doctors/:id/patients",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patients.destroyAll() instead.
        "prototype$__delete__patients": {
          url: urlBase + "/Doctors/:id/patients",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patients.count() instead.
        "prototype$__count__patients": {
          url: urlBase + "/Doctors/:id/patients/count",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments() instead.
        "prototype$__get__patientAppointments": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments.create() instead.
        "prototype$__create__patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patientAppointments.destroyAll() instead.
        "prototype$__delete__patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.count() instead.
        "prototype$__count__patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#create
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Doctors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#createMany
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Doctors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#upsert
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Doctors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#exists
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Doctors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#findById
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Doctors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#find
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Doctors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#findOne
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Doctors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#updateAll
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Doctors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#deleteById
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Doctors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#count
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Doctors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#prototype$updateAttributes
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Doctors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#createChangeStream
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Doctors/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#login
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Doctors/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#logout
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Doctors/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#confirm
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Doctors/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#resetPassword
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Doctors/reset",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctors.findById() instead.
        "::findById::Patient::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctors.destroyById() instead.
        "::destroyById::Patient::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctors.updateById() instead.
        "::updateById::Patient::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.findById() instead.
        "::findById::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment.destroyById() instead.
        "::destroyById::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.updateById() instead.
        "::updateById::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.link() instead.
        "::link::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.unlink() instead.
        "::unlink::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.exists() instead.
        "::exists::Patient::doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Patient.doctors() instead.
        "::get::Patient::doctors": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctors",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctors.create() instead.
        "::create::Patient::doctors": {
          url: urlBase + "/Patients/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctors.createMany() instead.
        "::createMany::Patient::doctors": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctors.destroyAll() instead.
        "::delete::Patient::doctors": {
          url: urlBase + "/Patients/:id/doctors",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctors.count() instead.
        "::count::Patient::doctors": {
          url: urlBase + "/Patients/:id/doctors/count",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment() instead.
        "::get::Patient::doctorsAppointment": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment.create() instead.
        "::create::Patient::doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctorsAppointment.createMany() instead.
        "::createMany::Patient::doctorsAppointment": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctorsAppointment.destroyAll() instead.
        "::delete::Patient::doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.count() instead.
        "::count::Patient::doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment/count",
          method: "GET"
        },

        // INTERNAL. Use Appointment.doctor() instead.
        "::get::Appointment::doctor": {
          url: urlBase + "/Appointments/:id/doctor",
          method: "GET"
        },

        // INTERNAL. Use Clinic.doctors.findById() instead.
        "::findById::Clinic::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Clinic.doctors.destroyById() instead.
        "::destroyById::Clinic::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Clinic.doctors.updateById() instead.
        "::updateById::Clinic::doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Clinic.doctors() instead.
        "::get::Clinic::doctors": {
          isArray: true,
          url: urlBase + "/Clinics/:id/doctors",
          method: "GET"
        },

        // INTERNAL. Use Clinic.doctors.create() instead.
        "::create::Clinic::doctors": {
          url: urlBase + "/Clinics/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Clinic.doctors.createMany() instead.
        "::createMany::Clinic::doctors": {
          isArray: true,
          url: urlBase + "/Clinics/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Clinic.doctors.destroyAll() instead.
        "::delete::Clinic::doctors": {
          url: urlBase + "/Clinics/:id/doctors",
          method: "DELETE"
        },

        // INTERNAL. Use Clinic.doctors.count() instead.
        "::count::Clinic::doctors": {
          url: urlBase + "/Clinics/:id/doctors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Doctor#getCurrent
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Doctors" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Doctor#updateOrCreate
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Doctor#update
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Doctor#destroyById
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Doctor#removeById
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Doctor#getCachedCurrent
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Doctor#login} or
         * {@link lbServices.Doctor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Doctor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor#isAuthenticated
         * @methodOf lbServices.Doctor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor#getCurrentId
         * @methodOf lbServices.Doctor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Doctor#modelName
    * @propertyOf lbServices.Doctor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Doctor`.
    */
    R.modelName = "Doctor";

    /**
     * @ngdoc object
     * @name lbServices.Doctor.patients
     * @header lbServices.Doctor.patients
     * @object
     * @description
     *
     * The object `Doctor.patients` groups methods
     * manipulating `Patient` instances related to `Doctor`.
     *
     * Call {@link lbServices.Doctor#patients Doctor.patients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Doctor#patients
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Queries patients of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patients = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::get::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#count
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Counts patients of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.patients.count = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::count::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#create
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Creates a new instance in patients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patients.create = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::create::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#createMany
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Creates a new instance in patients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patients.createMany = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::createMany::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#destroyAll
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Deletes all patients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patients.destroyAll = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::delete::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#destroyById
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Delete a related item by id for patients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patients.destroyById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::destroyById::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#findById
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Find a related item by id for patients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patients.findById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::findById::Doctor::patients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patients#updateById
         * @methodOf lbServices.Doctor.patients
         *
         * @description
         *
         * Update a related item by id for patients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patients.updateById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::updateById::Doctor::patients"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Doctor.patientAppointments
     * @header lbServices.Doctor.patientAppointments
     * @object
     * @description
     *
     * The object `Doctor.patientAppointments` groups methods
     * manipulating `Patient` instances related to `Doctor`.
     *
     * Call {@link lbServices.Doctor#patientAppointments Doctor.patientAppointments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Doctor#patientAppointments
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Queries patientAppointments of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::get::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#count
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Counts patientAppointments of Doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.patientAppointments.count = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::count::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#create
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Creates a new instance in patientAppointments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.create = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::create::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#createMany
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Creates a new instance in patientAppointments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.createMany = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::createMany::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#destroyAll
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Deletes all patientAppointments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patientAppointments.destroyAll = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::delete::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#destroyById
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Delete a related item by id for patientAppointments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patientAppointments.destroyById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::destroyById::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#exists
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Check the existence of patientAppointments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.exists = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::exists::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#findById
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Find a related item by id for patientAppointments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.findById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::findById::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#link
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Add a related item by id for patientAppointments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.link = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::link::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#unlink
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Remove the patientAppointments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patientAppointments.unlink = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::unlink::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor.patientAppointments#updateById
         * @methodOf lbServices.Doctor.patientAppointments
         *
         * @description
         *
         * Update a related item by id for patientAppointments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for patientAppointments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patientAppointments.updateById = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::updateById::Doctor::patientAppointments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Doctor#clinics
         * @methodOf lbServices.Doctor
         *
         * @description
         *
         * Fetches belongsTo relation clinics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        R.clinics = function() {
          var TargetResource = $injector.get("Clinic");
          var action = TargetResource["::get::Doctor::clinics"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Patient
 * @header lbServices.Patient
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Patient` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Patient",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Patients/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__findById__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__updateById__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctors.findById() instead.
        "prototype$__findById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctors.destroyById() instead.
        "prototype$__destroyById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctors.updateById() instead.
        "prototype$__updateById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.findById() instead.
        "prototype$__findById__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment.destroyById() instead.
        "prototype$__destroyById__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.updateById() instead.
        "prototype$__updateById__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.link() instead.
        "prototype$__link__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patient.doctorsAppointment.unlink() instead.
        "prototype$__unlink__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.exists() instead.
        "prototype$__exists__doctorsAppointment": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Patients/:id/doctorsAppointment/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__get__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Queries accessTokens of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Patients/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__create__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Patients/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__delete__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Patients/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$__count__accessTokens
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Counts accessTokens of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Patients/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctors() instead.
        "prototype$__get__doctors": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctors",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctors.create() instead.
        "prototype$__create__doctors": {
          url: urlBase + "/Patients/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctors.destroyAll() instead.
        "prototype$__delete__doctors": {
          url: urlBase + "/Patients/:id/doctors",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctors.count() instead.
        "prototype$__count__doctors": {
          url: urlBase + "/Patients/:id/doctors/count",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment() instead.
        "prototype$__get__doctorsAppointment": {
          isArray: true,
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "GET"
        },

        // INTERNAL. Use Patient.doctorsAppointment.create() instead.
        "prototype$__create__doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "POST"
        },

        // INTERNAL. Use Patient.doctorsAppointment.destroyAll() instead.
        "prototype$__delete__doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment",
          method: "DELETE"
        },

        // INTERNAL. Use Patient.doctorsAppointment.count() instead.
        "prototype$__count__doctorsAppointment": {
          url: urlBase + "/Patients/:id/doctorsAppointment/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#create
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Patients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#createMany
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Patients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#upsert
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Patients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#exists
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Patients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#findById
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Patients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#find
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Patients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#findOne
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Patients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#updateAll
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Patients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#deleteById
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Patients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#count
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Patients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#prototype$updateAttributes
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Patients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#createChangeStream
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Patients/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#login
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Patients/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#logout
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Patients/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#confirm
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Patients/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#resetPassword
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Patients/reset",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patients.findById() instead.
        "::findById::Doctor::patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patients.destroyById() instead.
        "::destroyById::Doctor::patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patients.updateById() instead.
        "::updateById::Doctor::patients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.findById() instead.
        "::findById::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments.destroyById() instead.
        "::destroyById::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.updateById() instead.
        "::updateById::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.link() instead.
        "::link::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Doctor.patientAppointments.unlink() instead.
        "::unlink::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.exists() instead.
        "::exists::Doctor::patientAppointments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Doctors/:id/patientAppointments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Doctor.patients() instead.
        "::get::Doctor::patients": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patients",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patients.create() instead.
        "::create::Doctor::patients": {
          url: urlBase + "/Doctors/:id/patients",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patients.createMany() instead.
        "::createMany::Doctor::patients": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patients",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patients.destroyAll() instead.
        "::delete::Doctor::patients": {
          url: urlBase + "/Doctors/:id/patients",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patients.count() instead.
        "::count::Doctor::patients": {
          url: urlBase + "/Doctors/:id/patients/count",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments() instead.
        "::get::Doctor::patientAppointments": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "GET"
        },

        // INTERNAL. Use Doctor.patientAppointments.create() instead.
        "::create::Doctor::patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patientAppointments.createMany() instead.
        "::createMany::Doctor::patientAppointments": {
          isArray: true,
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "POST"
        },

        // INTERNAL. Use Doctor.patientAppointments.destroyAll() instead.
        "::delete::Doctor::patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments",
          method: "DELETE"
        },

        // INTERNAL. Use Doctor.patientAppointments.count() instead.
        "::count::Doctor::patientAppointments": {
          url: urlBase + "/Doctors/:id/patientAppointments/count",
          method: "GET"
        },

        // INTERNAL. Use Appointment.patient() instead.
        "::get::Appointment::patient": {
          url: urlBase + "/Appointments/:id/patient",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patient#getCurrent
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Patients" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Patient#updateOrCreate
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Patient#update
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Patient#destroyById
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Patient#removeById
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Patient#getCachedCurrent
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Patient#login} or
         * {@link lbServices.Patient#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Patient instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient#isAuthenticated
         * @methodOf lbServices.Patient
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient#getCurrentId
         * @methodOf lbServices.Patient
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Patient#modelName
    * @propertyOf lbServices.Patient
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Patient`.
    */
    R.modelName = "Patient";

    /**
     * @ngdoc object
     * @name lbServices.Patient.doctors
     * @header lbServices.Patient.doctors
     * @object
     * @description
     *
     * The object `Patient.doctors` groups methods
     * manipulating `Doctor` instances related to `Patient`.
     *
     * Call {@link lbServices.Patient#doctors Patient.doctors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Patient#doctors
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Queries doctors of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::get::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#count
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Counts doctors of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.doctors.count = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::count::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#create
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Creates a new instance in doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.create = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::create::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#createMany
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Creates a new instance in doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.createMany = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::createMany::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#destroyAll
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Deletes all doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctors.destroyAll = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::delete::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#destroyById
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Delete a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctors.destroyById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::destroyById::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#findById
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Find a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.findById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::findById::Patient::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctors#updateById
         * @methodOf lbServices.Patient.doctors
         *
         * @description
         *
         * Update a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.updateById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::updateById::Patient::doctors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Patient.doctorsAppointment
     * @header lbServices.Patient.doctorsAppointment
     * @object
     * @description
     *
     * The object `Patient.doctorsAppointment` groups methods
     * manipulating `Doctor` instances related to `Patient`.
     *
     * Call {@link lbServices.Patient#doctorsAppointment Patient.doctorsAppointment()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Patient#doctorsAppointment
         * @methodOf lbServices.Patient
         *
         * @description
         *
         * Queries doctorsAppointment of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::get::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#count
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Counts doctorsAppointment of Patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.doctorsAppointment.count = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::count::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#create
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Creates a new instance in doctorsAppointment of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.create = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::create::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#createMany
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Creates a new instance in doctorsAppointment of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.createMany = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::createMany::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#destroyAll
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Deletes all doctorsAppointment of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctorsAppointment.destroyAll = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::delete::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#destroyById
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Delete a related item by id for doctorsAppointment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctorsAppointment.destroyById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::destroyById::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#exists
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Check the existence of doctorsAppointment relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.exists = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::exists::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#findById
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Find a related item by id for doctorsAppointment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.findById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::findById::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#link
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Add a related item by id for doctorsAppointment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.link = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::link::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#unlink
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Remove the doctorsAppointment relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctorsAppointment.unlink = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::unlink::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patient.doctorsAppointment#updateById
         * @methodOf lbServices.Patient.doctorsAppointment
         *
         * @description
         *
         * Update a related item by id for doctorsAppointment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for doctorsAppointment
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctorsAppointment.updateById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::updateById::Patient::doctorsAppointment"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Receptionist
 * @header lbServices.Receptionist
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Receptionist` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Receptionist",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Receptionists/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__findById__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Receptionists/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Receptionists/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__updateById__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Receptionists/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__get__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Queries accessTokens of Receptionist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Receptionists/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__create__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Receptionists/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__delete__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Receptionists/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$__count__accessTokens
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Counts accessTokens of Receptionist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Receptionists/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#create
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Receptionists",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#createMany
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Receptionists",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#upsert
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Receptionists",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#exists
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Receptionists/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#findById
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Receptionists/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#find
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Receptionists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#findOne
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Receptionists/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#updateAll
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Receptionists/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#deleteById
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Receptionists/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#count
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Receptionists/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#prototype$updateAttributes
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Receptionists/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#createChangeStream
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Receptionists/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#login
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Receptionists/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#logout
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Receptionists/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#confirm
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Receptionists/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#resetPassword
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Receptionists/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#getCurrent
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Receptionists" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Receptionist#updateOrCreate
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#update
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#destroyById
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#removeById
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receptionist` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#getCachedCurrent
         * @methodOf lbServices.Receptionist
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Receptionist#login} or
         * {@link lbServices.Receptionist#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Receptionist instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#isAuthenticated
         * @methodOf lbServices.Receptionist
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Receptionist#getCurrentId
         * @methodOf lbServices.Receptionist
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Receptionist#modelName
    * @propertyOf lbServices.Receptionist
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Receptionist`.
    */
    R.modelName = "Receptionist";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Appointment
 * @header lbServices.Appointment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Appointment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Appointment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Appointments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Appointment.doctor() instead.
        "prototype$__get__doctor": {
          url: urlBase + "/Appointments/:id/doctor",
          method: "GET"
        },

        // INTERNAL. Use Appointment.patient() instead.
        "prototype$__get__patient": {
          url: urlBase + "/Appointments/:id/patient",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#create
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Appointments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#createMany
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Appointments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#upsert
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Appointments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#exists
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Appointments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#findById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Appointments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#find
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Appointments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#findOne
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Appointments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#updateAll
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Appointments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#deleteById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Appointments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#count
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Appointments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#prototype$updateAttributes
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Appointments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#createChangeStream
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Appointments/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Appointment#updateOrCreate
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#update
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#destroyById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#removeById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Appointment#modelName
    * @propertyOf lbServices.Appointment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Appointment`.
    */
    R.modelName = "Appointment";


        /**
         * @ngdoc method
         * @name lbServices.Appointment#doctor
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Fetches belongsTo relation doctor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctor = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::get::Appointment::doctor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appointment#patient
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Fetches belongsTo relation patient.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patient` object.)
         * </em>
         */
        R.patient = function() {
          var TargetResource = $injector.get("Patient");
          var action = TargetResource["::get::Appointment::patient"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Clinic
 * @header lbServices.Clinic
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Clinic` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Clinic",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Clinics/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Clinic.doctors.findById() instead.
        "prototype$__findById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Clinic.doctors.destroyById() instead.
        "prototype$__destroyById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Clinic.doctors.updateById() instead.
        "prototype$__updateById__doctors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clinics/:id/doctors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Clinic.doctors() instead.
        "prototype$__get__doctors": {
          isArray: true,
          url: urlBase + "/Clinics/:id/doctors",
          method: "GET"
        },

        // INTERNAL. Use Clinic.doctors.create() instead.
        "prototype$__create__doctors": {
          url: urlBase + "/Clinics/:id/doctors",
          method: "POST"
        },

        // INTERNAL. Use Clinic.doctors.destroyAll() instead.
        "prototype$__delete__doctors": {
          url: urlBase + "/Clinics/:id/doctors",
          method: "DELETE"
        },

        // INTERNAL. Use Clinic.doctors.count() instead.
        "prototype$__count__doctors": {
          url: urlBase + "/Clinics/:id/doctors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#create
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Clinics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#createMany
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Clinics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#upsert
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Clinics",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#exists
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Clinics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#findById
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Clinics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#find
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Clinics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#findOne
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Clinics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#updateAll
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Clinics/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#deleteById
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Clinics/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#count
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Clinics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#prototype$updateAttributes
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Clinics/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Clinic#createChangeStream
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Clinics/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Doctor.clinics() instead.
        "::get::Doctor::clinics": {
          url: urlBase + "/Doctors/:id/clinics",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Clinic#updateOrCreate
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Clinic#update
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Clinic#destroyById
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Clinic#removeById
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Clinic` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Clinic#modelName
    * @propertyOf lbServices.Clinic
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Clinic`.
    */
    R.modelName = "Clinic";

    /**
     * @ngdoc object
     * @name lbServices.Clinic.doctors
     * @header lbServices.Clinic.doctors
     * @object
     * @description
     *
     * The object `Clinic.doctors` groups methods
     * manipulating `Doctor` instances related to `Clinic`.
     *
     * Call {@link lbServices.Clinic#doctors Clinic.doctors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Clinic#doctors
         * @methodOf lbServices.Clinic
         *
         * @description
         *
         * Queries doctors of Clinic.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::get::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#count
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Counts doctors of Clinic.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.doctors.count = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::count::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#create
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Creates a new instance in doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.create = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::create::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#createMany
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Creates a new instance in doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.createMany = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::createMany::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#destroyAll
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Deletes all doctors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctors.destroyAll = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::delete::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#destroyById
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Delete a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.doctors.destroyById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::destroyById::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#findById
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Find a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.findById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::findById::Clinic::doctors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Clinic.doctors#updateById
         * @methodOf lbServices.Clinic.doctors
         *
         * @description
         *
         * Update a related item by id for doctors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for doctors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Doctor` object.)
         * </em>
         */
        R.doctors.updateById = function() {
          var TargetResource = $injector.get("Doctor");
          var action = TargetResource["::updateById::Clinic::doctors"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
