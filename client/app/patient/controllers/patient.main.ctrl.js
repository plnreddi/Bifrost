(function () {

    'use strict';

    angular
        .module('bifrostApp')
        .controller('PatientMainCtrl', function ($scope) {

            $scope.items = [
                { name: 'Demographic', sref: '.demographic' },
                { name: 'Vitals', sref: '.vitals' },
                { name: 'Medical History', sref: '.medicalHistory' }
            ];
        });

})();
