const express = require('express');
const baseController = require('../base.controller');
const baseService = require('../base.service');
const User = require('../../server/models/user.model');

const UserController = baseController(baseService(User, 'user'));
const user = express.Router();

/* GET users listing. */
user.get('/', UserController.list);

user.get('/:id', UserController.read);

user.post('/', UserController.create);

user.put('/', UserController.update);

user.delete('/:id', UserController.del);


module.exports.users = user;

