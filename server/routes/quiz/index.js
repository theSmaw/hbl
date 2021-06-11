const path = require('path');

const sendJsonResponse = require('../sendJsonResponse');

module.exports = router => router.post(
  '/quiz/quiz-1',
  (req, res) => sendJsonResponse(path.resolve(__dirname, `../../fixtures/quiz/quiz-1.json`), res)
);