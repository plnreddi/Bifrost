module.exports = function(app) {
  var path = require('path');
  app.get('/loaderio-5e0a6319e3b8baa60d287eb5243a4c5b', function (req, res) {
    res.sendFile(path.join(__dirname + '/random.text'));
  });
}
