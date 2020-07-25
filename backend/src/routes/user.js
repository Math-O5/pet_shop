'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerUsers = require('../controllers/user-controller');  
const Role = require('../helpers/role');
const userRouter = express.Router();

userRouter.get('/', controllerUsers.get);
userRouter.get('/:username',  authService.authorize(), controllerUsers.getByUsername);
userRouter.delete('/delete/:id',  authService.authorize(), controllerUsers.delete);
userRouter.post('/new/register', controllerUsers.register);
userRouter.post('/login', controllerUsers.authenticate);

module.exports = userRouter;
