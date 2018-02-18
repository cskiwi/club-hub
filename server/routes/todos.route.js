const express = require('express');
const ToDoController = require('../controllers/todos.controller');

const todos = express.Router();

/* GET users listing. */
todos.get('/', ToDoController.getTodos);

todos.post('/', ToDoController.createTodo);

todos.put('/', ToDoController.updateTodo);

todos.delete('/:id',ToDoController.removeTodo);

module.exports.todos = todos;
