const express = require('express');
const { userProfile } = require('../../controllers/usersPage');
const userRouter = express.Router();

userRouter.get('/users',userProfile.renderUsers)

module.exports = { userRouter };
