const express = require('express');
const { userProfile } = require('../../controllers/usersPage');
const userProfileRouter = express.Router();

userProfileRouter.get('/users/:id', userProfile.renderUsers)

module.exports = { userProfileRouter };
