'use strict';

angular.module('bifrostApp')
  .service('settings', function(Setting) {
    var settings = {};

    return {
      promise: Setting.find({}, function(rawSettings) {
        for (var i = 0; i < rawSettings.length; i++) {
          settings[rawSettings[i].key] = rawSettings[i].value;
        }
      }),
      setData: function(data) {
        settings = data;
      },
      getAllSettings: function() {
        return settings;
      },
      getSetting: function(key) {
        return settings[key];
      }
    };
  });
