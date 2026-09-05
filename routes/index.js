const express = require('express');
const { authProfile } = require('../controllers');
const { loginVerification,verification,logoutVerif } = require('../middleware')
const router = express.Router();

/* GET home page. */
router.get('/',authProfile.renderAuthPage);
router.get('/:start',authProfile.renderAuthPage);
router.post('/sign-up',verification,authProfile.newUser);
router.post('/sign-in',loginVerification,authProfile.loginUser);
router.post('/logout/:id',logoutVerif,authProfile.logoutProfile);
router.post('/new-password',authProfile.newUserPassword);

module.exports = router;
