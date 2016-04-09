
module.exports = function(app) {

  var Enum = app.models.Enum;

  app.dataSources.db.automigrate('Enum', function(err) {
    if (err) throw err;

    var enumdata = {
      apCities: [
          'Visakhapatnam',  
          'Vijayawada',   
          'Guntur', 
          'Nellore',
          'Kurnool',
          'Rajahmundry',  
          'Tirupati',   
          'Kadapa',   
          'Kakinada',  
          'Anantapur',  
          'Vizianagaram',   
          'Eluru',  
          'Ongole',   
          'Nandyal',  
          'Machilipatnam',  
          'Adoni',  
          'Tenali',   
          'Proddatur', 
          'Chittoor',   
          'Hindupur',   
          'Bhimavaram',   
          'Madanapalle',  
          'Srikakulam',   
          'Guntakal',   
          'Dharmavaram',  
          'Gudivada',   
          'Narasaraopet',  
          'Tadpatri',   
          'Tadepalligudem',  
          'Amaravati',  
          'Chilakaluripet'  
      ],
      apDistricts: [
          'Anantapur', 
          'Chittoor', 
          'East Godavari',  
          'Guntur',   
          'Kadapa',   
          'Krishna',  
          'Kurnool',  
          'Nellore',  
          'Prakasam',     
          'Srikakulam',   
          'Visakhapatnam',    
          'Vizianagaram',   
          'West Godavari'
      ],
      indianStates: [
          'Andhra Pradesh',
          'Arunachal Pradesh',
          'Assam',
          'Bihar',
          'Chhattisgarh',
          'Goa',
          'Gujarat',
          'Haryana',
          'Himachal Pradesh',
          'Jammu & Kashmir',
          'Jharkhand',
          'Karnataka',
          'Kerala',
          'Madhya Pradesh',
          'Maharashtra',
          'Manipur',
          'Meghalaya',
          'Mizoram',
          'Nagaland',
          'Odisha (Orissa)',
          'Punjab',
          'Rajasthan',
          'Sikkim',
          'Tamil Nadu',
          'Telangana',
          'Tripura',
          'Uttar Pradesh',
          'Uttarakhand',
          'West Bengal'
      ],
      medicalSpecialties: [ //http://www.medindia.net/drugs/specialitywise.asp
          'Allergy and Immunology',
          'Anesthesiology',
          'Cardiology',
          'Dentistry',
          'Dermatology',
          'Endocrinology',
          'ENT (Ear, Nose and Throat)',
          'Gastroenterology',
          'Neurology',
          'OB/GYN (Obstetrics and Gynecology)',
          'Oncology',
          'Ophthalmology',
          'Orthopaedic Surgery',
          'Pediatrics',
          'Psychiatry',
          'Pulmonology',
          'Radiology',
          'Rheumatology',
          'Sexology',
          'Urology'
      ],
      bloodGroups: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']

    };

    // Create Enums
    Enum.create(enumdata, function(err, instance) {
      if (err) return console.error(err);
      console.log('Enum created: ', instance);
    });

  });

};  // end



























