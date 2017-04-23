var Placeholder = require('./models/placeholder');

module.exports = function (app) {
  // sample api route
  app.get('/api/placeholders', function (req, res) {
    Placeholder.find(function (err, placeholders) {
      if (err) res.send(err);
      res.json(placeholders);
    });
  });

  // angular
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });
};