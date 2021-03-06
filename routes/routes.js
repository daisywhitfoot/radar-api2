'use strict';
module.exports = routes;

function routes(app) {
  app.all('/', function (req, res) {
    res.status(200).json({
      status: 'OK',
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method
    });
  });

  app.get('/issues', require('./issues.js'));
}