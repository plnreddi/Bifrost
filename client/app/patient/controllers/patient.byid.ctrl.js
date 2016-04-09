(function() {

    'use strict';

    angular.module('bifrostApp')
    .controller('PatientByIdCtrl', function(dataById) {  //PatientData1

        //controle.log('ok1');

       this.teststr = 'ok';

       //this.details = data;

       this.detail = dataById;

		//controle.log(this.detail);
    });

})();