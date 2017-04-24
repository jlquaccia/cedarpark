var Placeholder = require('./models/placeholder');
var request = require('request');

module.exports = function (app) {
  // sample api route
  app.get('/api/placeholders', function (req, res) {
    Placeholder.find(function (err, placeholders) {
      if (err) res.send(err);
      res.json(placeholders);
    });
  });

  app.get('/api/cedar-park-ig', function (req, res) {
    request('https://www.instagram.com/cedarparkband/media', function (error, response, body) {
      if (error) res.json(error);

      if (response.statusCode === 200) {
        console.log('ig status code: ' + response.statusCode);
        res.json(body);
      } else {
        console.log('ig status code: ', response.statusCode);
      }
    });
  });

  // angular
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });
};