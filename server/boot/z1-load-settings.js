'use strict';

module.exports = function(app) {

    var ds = app.datasources.db;

    var Setting = app.models.Setting;

    ds.automigrate('Setting', function(err) {
        if (err) throw err

        // settings
        var vptSettings = SampleSettings();

        Setting.create(vptSettings, function(err, settings) {
            if (err) throw err;
            console.log('Settings created:', settings);
        });
    });

    function SampleSettings() {
        return [
            { key: 'buisinessHoursStart', value: '10:00' },
            { key: 'buisinessHoursEnd', value: '18:00' },
            { key: 'buisinessHoursDOW',value: '1,2,3,4,5' },

            { type: 'string', key: 'appName', value: 'Remediz Admin' }, 
            { type: 'select', key: 'appTheme', value: 'skin-blue', options: ['skin-blue','skin-black'] }, 
            { type: 'select', key: 'appLayout', value: 'fixed', options: ['skin-blue', 'not-fixed'] }, 
            { type: 'string', key: 'formLayout', value: 'horizontal' }, 
            { type: 'int',    key: 'formLabelSize', value: 3 }, 
            { type: 'int',    key: 'formInputSize', value: 9 }, 
            { type: 'boolean', key: 'com.module.users.enable_registration', value: true }
        ];
    } // end of SampleSettings

};


