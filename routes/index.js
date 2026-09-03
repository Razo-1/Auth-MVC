var express = require('express');
const { authProfile } = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/:start',authProfile.renderAuthPage);

module.exports = router;
