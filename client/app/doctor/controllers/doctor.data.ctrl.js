
(function() { 'use strict';

    angular
        .module('bifrostApp')
        /**
         * @ngdoc directive
         * @name bifrostApp.directive:adminHeader
         * @description
         * @param {string} title Title
         * @param {string} subTitle Subtitle
         * # adminHeader
         */
        .controller('DoctorDataCtrl', function(doctorForms, doctorData) {  

            var vm = this;
                
            // funcation assignment
            vm.onSubmit = onSubmit;
            
            // ag-grid 
            var columnDefs = [
                
                {headerName: "Doctor Photo", field: "doctorPhoto", width: 200,
                    cellRenderer: function(params) {

                        var doctorSpecialty = 'Dentist';
                        var doctorExperience = '10 years of experience';
                        var doctorEmail = 'email@example.com';
                        var doctorQualification = 'BDS, MDS - Prosthodontics and Oral Implantology' +
                            'BDS, MDS - Prosthodontics and Oral Implantology BDS, MDS - Prosthodontics and Oral Implantology';
                        
                        //var photo = params.data.doctorPhoto;
                        //var name = params.data.doctorName;
                        var photo = params.data.profile.imageUrl;
                        var name = params.data.profile.name;
                        
                        var specialty = doctorSpecialty;
                        var experience = doctorExperience;
                        var email = doctorEmail;
                        var qualification = doctorQualification;
     
                         
                        return  '<div style="padding: 10px;">' +
                                    '<img class="img-responsive" style="width:100%;" src=' + photo + ' alt="User picture">' +
                                '</div>' +
                                
                                '<div style="padding: 10px; color: #444; display: block;">' +
                                    '<h2 style="font-size: 18px; margin: 0px; line-height: 1; white-space: normal;">' + name + '</h2>' +
                                    '<p>' + specialty + '</p>' + 
                                    '<p style="font-size: 11px; color: #808080; white-space: normal;">' + qualification +  '</p>' +
                                    '<p class="text-muted">' + experience + '</p>' +
                                    '<p><i class="glyphicon glyphicon-envelope rgin-r-5"></i>' + email + '<br /></p>' +
                                    
                                '</div>' ;
                        
                    }
                },     
                              
                { headerName: "Credential One", field: "credentialOne", width: 200,
                    cellRenderer: function(params) {
                        var tpl = credentialTpl(params.data.profile.bio)
                        return tpl;
                    }
                },

                { headerName: "Credential Two", field: "credentialTwo", width: 200,
                    cellRenderer: function(params) {
                        
                    var str = '<p style="font-size: 11px; color: black; white-space: normal;     overflow: auto; box-sizing: border-box;">'
                    var tpl = '<div style="padding: 10px; display: block;">';
                    
                    angular.forEach(params.data.services, function(ser) {
                        tpl += str + ser.description + '</p>'
                    });
                
                    return tpl + '</div>';
                        
                    }
                },
  
            ];
            
    
            function credentialTpl(descp) {
                
                var str = '<p style="font-size: 11px; color: black; white-space: normal;     overflow: auto; box-sizing: border-box;">'
                
                var tpl = '<div style="padding: 10px; display: block;">';
                
                angular.forEach(descp, function(des) {
                    tpl += str + des + '</p>'
                });
                
                return tpl + '</div>';
            }

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                rowHeight: 500,
                enableColResize: true
                //onGridReady: function(event) {
                //    event.api.sizeColumnsToFit();
                //}

            };
               
            /*
            // doctors
            vm.loadingData2 = doctorData.find().then(function(result) {
                console.log('doctor: ', result[0]);
                vm.model= result[0];
                if (vm.gridOptions.api) {
                    vm.gridOptions.api.setRowData(result);
                    console.log(vm.gridOptions);
                }
            });
            */
            
            // doctors with hospitals
            vm.loadingData1 = doctorData.doctorsAndHospitals(1).then(function(result) {
                vm.model= result.doctorsAndHospitals[0];
                console.log('doctor: ', result.doctorsAndHospitals[0]);
                if (vm.gridOptions.api) {
                    vm.gridOptions.api.setRowData(result.doctorsAndHospitals);
                    console.log('grid Options: ', vm.gridOptions);
                }
            }); 
            
            // forms and sample data
            vm.loadingData = doctorForms.getModelFields().then(function(result) {
                vm.model1 = result[0];
                vm.fields1 = result[1];
                vm.originalFields = angular.copy(result);
                
                vm.fields1a = vm.fields1.slice(0,4);
                vm.fields1b = vm.fields1.slice(4,8);
            });
            
            // {email: "john@doe.com", password: "a"},
            // var data = { id: 1, username: 'Jane', email: 'jane@doe.com', password: 'a', doctorName: 'Dr.Kishan' };
            function onSubmit() {
                alert(JSON.stringify(vm.model), null, 2);

                console.log('fake data: ', vm.model1)
                doctorData.upsert(vm.model1).then(function () {
                    console.log('ok');
                });
            }

        });

})();









