const express = require('express');
const { userProfile } = require('../../controllers/usersPage');
const { checkId } = require('../../middleware');
const userProfileRouter = express.Router();

userProfileRouter.get('/users/:id',checkId, userProfile.renderUsers)

module.exports = { userProfileRouter };
