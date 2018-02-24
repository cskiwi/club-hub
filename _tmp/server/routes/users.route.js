var express = require('express');
const UserController = require('../controllers/users.controller');

const user = express.Router();

/* GET users listing. */
user.get('/', UserController.getUsers);

user.get('/:id', UserController.getUser);

user.post('/', UserController.createUser);

user.put('/', UserController.updateUser);

user.delete('/:id',UserController.removeUser);


module.exports.users = user;
