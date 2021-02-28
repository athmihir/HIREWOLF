const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, OPTIONS, GET, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization'
    );
    next();
});

router.get('/test-questions', user.getQuestions);

module.exports = router