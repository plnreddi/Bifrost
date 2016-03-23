'use strict';

angular.module('bifrostApp')
  .controller('PatientsCtrl', function(Doctor, $rootScope, $state) {
    var columnDefs = [
        {headerName: "Username", field: "username"},
        {headerName: "Email", field: "email"}
    ];

    this.gridOptions = {
        columnDefs: columnDefs,
        rowHeight: 22,
        rowSelection: 'single',
        onRowClicked: function(event) {
          $state.go('patientDetail', {id: event.data.id});
        },
    };

    Doctor.patients({
      id: $rootScope.currentUser.id
    }, angular.bind(this, function(patients) {
      this.patients = patients;
      this.gridOptions.api.setRowData(patients);
      this.gridOptions.columnApi.sizeColumnsToFit();
    }));
  });
