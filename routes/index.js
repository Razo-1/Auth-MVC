var express = require('express');
const { authProfile } = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/:start',authProfile.renderAuthPage);
router.post('/sign-up',authProfile.newUser);
router.post('/sign-in',authProfile.loginUser);
router.post('/logout/:id',authProfile.logoutProfile);
router.post('/new-password',authProfile.newUserPassword);

module.exports = router;
