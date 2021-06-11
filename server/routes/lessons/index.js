const path = require('path');

const sendJsonResponse = require('../sendJsonResponse');

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

module.exports = router => days.map(day => router.get(
  `/lessons/${day}`,
  (req, res) => sendJsonResponse(path.resolve(__dirname, `../../fixtures/lessons/${day}.json`), res)
));
