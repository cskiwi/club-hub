const express = require('express');
const ClubController = require('./club.controller');
const clubs = express.Router();

clubs.get('/', ClubController.list);
clubs.post('/', ClubController.create);
clubs.get('/:id', ClubController.read);
clubs.post('/:id/add-user/:uid', ClubController.addUser);
clubs.delete('/:id/remove-user/:uid', ClubController.read);
clubs.put('/', ClubController.update);
clubs.delete('/:id', ClubController.del);


module.exports.clubs = clubs;
