
var _ = require('lodash');
var async = require("async");

module.exports = function(Doctor) {

    Doctor.doctorsAndHospitals = function(specialtyId, cb) {
        
        Doctor.find({}, function(err, doctors){
            if (err) return console.error(err);
            
            var doctorsPlus = [];
            async.each(doctors, function(doctor, callback) {
 
                    doctor.hospitals({}, function(err, hospitals){
                        if(err) {
                            callback(err);
                            return;
                        }
                        if(hospitals){
    
                            var docHospitals = [];
                            for (var i = 0; i < hospitals.length; i++) {
                                docHospitals.push(hospitals[i]);
                            };
                          
                            _.merge(doctor, {'doctorHospitals': docHospitals});
                            doctorsPlus.push(doctor);
                            callback();
                        }
                    });
            
                }, 
                
                function(err){
                    if( err ) {
                        console.log('Error');
                    } else {
                        cb(null, doctorsPlus);
                    }
                }
            );
  
        });
        
    }


    Doctor.remoteMethod ( 'doctorsAndHospitals',
        {
            http: {path: '/:id/doctors-and-hospitals', verb: 'get'},
            accepts: {arg: 'specialtyId', type: 'number', http: { source: 'query' } },
            returns: {arg: 'doctorsAndHospitals', type: 'string'}
        }
    );

}; // end module


//  {"email": "adi@doe.com", "password": "a"}




  














