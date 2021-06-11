const router = require('express').Router();

const quiz = require('./quiz');
const lesson = require('./lesson');
const lessons = require('./lessons');

quiz(router);
lesson(router);
lessons(router);

module.exports = router;