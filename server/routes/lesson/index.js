const path = require('path');

const sendJsonResponse = require('../sendJsonResponse');

const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

module.exports = router => ids.map(id => router.get(
  `/lesson/lesson-${id}`,
  (req, res) => sendJsonResponse(path.resolve(__dirname, `../../fixtures/lesson/lesson-${id}.json`), res)
));