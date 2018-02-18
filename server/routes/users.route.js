var express = require('express');
const ToDoController = require('../controllers/todos.controller');

const user = express.Router();

/* GET users listing. */
user.get('/', ToDoController.getTodos);

user.post('/', ToDoController.createTodo);

user.put('/', ToDoController.updateTodo);

user.delete('/:id',ToDoController.removeTodo);


module.exports.users = user;
