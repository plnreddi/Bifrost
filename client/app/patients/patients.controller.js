'use strict';

angular.module('bifrostApp')
  .controller('PatientsCtrl', function(Doctor, $rootScope) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    this.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    Doctor.patients({
      id: $rootScope.currentUser.id
    }, angular.bind(this, function(patients) {
      this.patients = patients;

    }));
  });
