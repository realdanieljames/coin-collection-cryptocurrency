const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth');


router.get('/', (req, res, next) => {
    res.send('respond with a home resource')
});
router.post('/signup', signup);
router.post('/signin', signin);
module.exports = router