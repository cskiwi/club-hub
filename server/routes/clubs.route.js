const clubController = require('../controllers/club.controller');
const Club = require('../../server/models/club.model');

const express = require('express');

const clubs = express.Router();

clubs.get('/', clubController.list);
clubs.post('/', clubController.create);
clubs.get('/:id', clubController.read);
clubs.put('/', clubController.update);
clubs.delete('/:id', clubController.del);


module.exports.clubs = clubs;
